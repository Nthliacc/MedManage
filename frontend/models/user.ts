type User = {
  id: number;
  username: string;
  email: string;
};

interface UserState {
  username: User | null;
  isAdmin: boolean;
  id: number;
}
