import { useRouter } from 'next/router';
import { createContext, useContext, useState } from 'react';
import { post } from './api';

type User = {
  id: number;
  username: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async (email: string, password: string) => {},
  register: async (email: string, password: string, name: string) => {},
  logout: () => {}
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    const response = await post('/login', { username: email, password });
    console.log(response);
    // if (response.ok) {
    //   const user = await response.json();

    //   setUser(user);
    // } else {
    //   throw new Error('Login failed.');
    // }
  };

  const register = async (email: string, password: string, name: string) => {
    const response = await post('/register', { email, password, name });

    if (response.ok) {
      const user = await response.json();
      setUser(user);
      router.push('/dashboard');
    } else {
      throw new Error('Register failed.');
    }
  };

  const logout = () => {
    setUser(null);
    // limpar localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    // redirecionar para a página de login
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
