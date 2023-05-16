import Button from '@/components/Button';
import { Table } from '@/styles/user/list';
import React from 'react';

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

const UserListItem = ({ user, onEdit, onDelete }: { user: User; onEdit: () => void; onDelete: () => void }) => (
  <tr>
    <td>{user.username}</td>
    <td>{user.email}</td>
    <td>
      <Button color="secondary" disabled={true} onClick={onEdit} title='Não disponivel'>Editar</Button>
      <Button color="tertiary" disabled={true} onClick={onDelete} title='Não disponivel'>Excluir</Button>
    </td>
  </tr>
);

const UserList = ({ users, onEdit, onDelete }: Props) => (
  <Table>
    <caption>Lista de usuários</caption>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {users && users.map((user) => (
        <UserListItem key={user.id} user={user} onEdit={() => onEdit(user)} onDelete={() => onDelete(user)} />
      ))}
    </tbody>
  </Table>
);

export default UserList;

