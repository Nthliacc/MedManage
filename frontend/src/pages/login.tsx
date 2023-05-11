import { useRouter } from 'next/router';
import { FormLogin, Label, Input, Button, Image } from '@/styles/Login';
import { useAuth } from '@/services/auth';
import useForm from '@/hooks/useForm';

type FormValues = {
  email: string;
  password: string;
};

const initialValues: FormValues = {
  email: '',
  password: ''
};

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();

  const onSubmit = (values: FormValues) => {
    if (!values.email || !values.password)
      return alert('Preencha todos os campos');

    login(values.email, values.password);
  };

  const { values, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit
  });

  return (
    <FormLogin onSubmit={handleSubmit}>
      <Image src="/logo.png" alt="Logo" />
      <Label>Email</Label>
      <Input
        type="text"
        name="email"
        placeholder="Digite seu email"
        value={values.email}
        onChange={handleChange}
      />
      {}
      <Label>Senha</Label>
      <Input
        type="password"
        name="password"
        placeholder="Digite sua senha"
        value={values.password}
        onChange={handleChange}
      />

      <Button type="submit">Entrar</Button>
      <Button type="button" onClick={() => router.push('/register')}>
        Cadastrar
      </Button>
    </FormLogin>
  );
};

export default LoginPage;
