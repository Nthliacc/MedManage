import Button from "@/components/Button";
import { useRouter } from "next/router"
import styled from "styled-components";

const error404 = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push("/")
    }

    return (
        <Container>
            <img src="/erro-404.png" alt="404" />
            <Button onClick={handleBack} color="tertiary">
                Voltar
            </Button>
        </Container>
    )
}

export default error404

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--white-color);
    padding: 20px;
    border-radius: var(--border-radius);
    min-height: 300px;
`;