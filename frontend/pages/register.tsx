import Button from '@/components/Button';
import useForm from '@/hooks/useForm';
import { useAuth } from '@/services/auth';
import { Input, Label } from '@/styles/Login';
import { Container, FormRegister } from '@/styles/Register';

type FormValues = {
  email: string;
  password: string;
  username: string;
};

const initialValues: FormValues = {
  email: '',
  password: '',
  username: ''
};
const RegisterPage = () => {
  const { register } = useAuth();

  const onSubmit = (values: FormValues) => {
    if (!values.email || !values.password || !values.username)
      return alert('Preencha todos os campos');

    register(values.email, values.password, values.username);
  };

  const { values, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit
  });

  return (
    <Container>
      <h1>Registrar</h1>
      <FormRegister onSubmit={handleSubmit}>
        <Label htmlFor="username">Nome</Label>
        <Input
          type="text"
          id="username"
          value={values.username}
          required
          onChange={handleChange}
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          required
          value={values.email}
          onChange={handleChange}
        />
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          required
          value={values.password}
          onChange={handleChange}
        />
        <Button type='submit' color="secondary">Registrar</Button>
      </FormRegister>
      <p>
        Já possui uma conta? <a href="/login">Entre</a>
      </p>
    </Container>
  );
};

export default RegisterPage;
