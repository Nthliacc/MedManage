import { del, get, post } from "@/services/api";
import { GetServerSideProps } from "next";
import VoidUsers from "@/components/void/VoidUsers";
import UserList from "./list";
import { Fragment } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/router";

const UserPage = ({ users }: any) => {
  const router = useRouter();
  const handleEdit = (user: User) => {
    post("/accounts", user);
  };

  const handleDelete = (user: User) => {
    del(`/accounts/${user.id}`);
  };

  const goHome = () => {
    router.push("/");
  };

  return (
    <Fragment>
      {users?.length > 0 ? (
        <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} />
      ) : (
        <VoidUsers />
      )}
      <Button color="secondary" onClick={goHome}>Voltar</Button>
    </Fragment>
  );
};

export default UserPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await get("/accounts");

  return {
    props: {
      users,
    }
  };
}