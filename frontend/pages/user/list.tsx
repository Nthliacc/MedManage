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
      <button onClick={onEdit}>Editar</button>
      <button onClick={onDelete}>Excluir</button>
    </td>
  </tr>
);

const UserList = ({ users, onEdit, onDelete }: Props) => (
  <table>
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
  </table>
);

export default UserList;

