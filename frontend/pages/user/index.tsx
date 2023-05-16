import { del, get, post } from "@/services/api";
import { GetServerSideProps } from "next";
import VoidUsers from "@/components/void/VoidUsers";
import UserList from "./list";
import { Fragment } from "react";

const SettingPage = ({ users }: any) => {

  const handleEdit = (user: User) => {
    post("/accounts", user);
  };

  const handleDelete = (user: User) => {
    del(`/accounts/${user.id}`);
  };

  return (
    <Fragment>
      {users?.length > 0 ? (
        <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} />
      ) : (
        <VoidUsers />
      )}
    </Fragment>
  );
};

export default SettingPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await get("/accounts");

  return {
    props: {
      users,
    }
  };
}