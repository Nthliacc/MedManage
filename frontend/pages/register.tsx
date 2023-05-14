import useForm from '@/hooks/useForm';
import { useAuth } from '@/services/auth';
import { Input, Label } from '@/styles/Login';

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
    <div>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nome</Label>
        <Input
          type="text"
          id="name"
          value={values.name}
          onChange={handleChange}
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={values.email}
          onChange={handleChange}
        />
        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit">Registrar</button>
      </form>
      <p>
        Já possui uma conta? <a href="/login">Entre</a>
      </p>
    </div>
  );
};

export default RegisterPage;
