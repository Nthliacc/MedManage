import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { del, get } from "@/services/api";
import formatDate from "@/utils/formatDate";
import styled from "styled-components";
import Button from "@/components/Button";
import formatValue from "@/utils/formatValue";
import ButtonIcon from "@/components/ButtonIcon";
import { Fragment } from "react";
import { useAuth } from "@/services/auth";

type Props = {
  medication: Medication;
};

const viewPage = ({ medication }: Props) => {
  const router = useRouter();
  const { user } = useAuth();
  const { image, name, price, expiration_date } = medication;
  const isAdmin = user?.isAdmin;

  if (!medication) {
    return <div>Medicamento não encontrado</div>;
  }

  const handleDelete = async () => {
    const ok = confirm("Deseja excluir o medicamento?");

    if (ok && isAdmin) {
      await del(`/medication/${medication.id}`);
      router.push("/medication");
    } 
  };

  const handleEdit = () => {
    if(isAdmin) router.push(`/medication/${medication.id}/edit`);
  };

  return (
    <Container>
      <Image src={image ? image : "/default-image.png"} alt={medication.name} />
      <Details>
        <div>
          <h1>{name}</h1>
          <p>Preço: {formatValue(price)}</p>
          <p>
            Data de expiração:
            {"\n" + formatDate(expiration_date)}
          </p>
          {isAdmin && (
            <Fragment>
              <p>
                Criado em:
                {"\n" + formatDate(medication.created_at)}
              </p>
              <p>
                Atualizado em:
                {"\n" + formatDate(medication.updated_at)}
              </p>
            </Fragment>
          )}
        </div>
        <Tools>
          {isAdmin && (
            <ButtonContainer>
              <ButtonIcon
                icone="/edit.png"
                title="Editar"
                size="18"
                onClick={handleEdit}
              >
                Editar
              </ButtonIcon>
              <ButtonIcon
                icone="/delete.png"
                title="Excluir"
                size="20"
                onClick={handleDelete}
              >
                Excluir
              </ButtonIcon>
            </ButtonContainer>
          )}
          <Button
            color="secondary"
            size="large"
            onClick={() => router.push("/")}
          >
            Voltar
          </Button>
        </Tools>
      </Details>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const { id } = query;

  const medication = await get(`medication/${id}`);

  return {
    props: {
      medication,
    },
  };
};

export default viewPage;

const Container = styled.div`
  display: flex;
  background-color: var(--white-color);
  padding: 20px;
  border-radius: var(--border-radius);
  min-height: 300px;
`;

const Image = styled.img`
  width: 300px;
  margin-right: 20px;
  border-radius: var(--border-radius);
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-size: 16px;
  }
`;

const Tools = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  height: 32%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 100%;
`;
