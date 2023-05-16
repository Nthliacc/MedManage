import { useRouter } from 'next/router';
import { createContext, useContext, useState } from 'react';
import { post } from './api';
import jwt_decode from 'jwt-decode';
import { setItem, getItem, removeItem } from '@/utils/localStorage';


type AuthContextType = {
  user: UserState | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  tokenExpired: () => boolean;
  error?: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async (email: string, password: string) => {},
  register: async (email: string, password: string, name: string) => {},
  logout: () => {},
  tokenExpired: () => false,
  error: false
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserState | null>(null);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    const response = await post('/login', { username: email, password });

    if (response?.status === 200) {
      const { access_token } = await response.data;
      setItem('token', access_token);
      console.log(access_token)
      const user: DecodedToken = jwt_decode(access_token);
      setUser(user);

      router.push('/dashboard');
    } else if(response?.status === 404) {
      alert('Usuário ou senha inválidos');
    } else {
      alert('Algum erro ocorreu, tente novamente mais tarde.');
    }
  };

  const tokenExpired = () => {
    const token: string | null = getItem('token');
    if (token) {
      try {
        const user: DecodedToken = jwt_decode(token);
        const expirationDate = new Date(user.exp * 1000);
        const isExpired = expirationDate <= new Date();
        if (isExpired) {
          return true;
        }
      } catch (error) {
        console.error(`Error decoding token: ${error}`);
      }
    } else {
      console.error('Token not found in localStorage.');
    }
    return false;
  };

  const register = async (email: string, password: string, name: string) => {
    const response = await post('/register', { email, password, name });

    if (response?.status === 200) {
      const user = await response.data;
      setUser(user);
      router.push('/dashboard');
    } else {
      setError(true);
    }
  };

  const logout = () => {
    setUser(null);
    removeItem('token');

    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, error, tokenExpired }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
