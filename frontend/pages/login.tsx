import { useRouter } from "next/router";
import {
  FormLogin,
  Label,
  Input,
  Image,
  Error,
  PasswordButton,
  InputPassword,
} from "@/styles/Login";
import { useAuth } from "@/services/auth";
import useForm from "@/hooks/useForm";
import Button from "@/components/Button";
import { useState } from "react";

type FormValues = {
  email: string;
  password: string;
};

const initialValues: FormValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const router = useRouter();
  const { login, error } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values: FormValues) => {
    if (!values.email || !values.password)
      return alert("Preencha todos os campos");

    login(values.email, values.password);
  };

  const { values, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit,
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormLogin onSubmit={handleSubmit}>
      <Image src="/logo.png" alt="Logo" />
      {error && <Error>Usuário ou senha inválidos</Error>}
      <Label>Email</Label>
      <Input
        type="text"
        name="email"
        placeholder="Digite seu email"
        value={values.email}
        onChange={handleChange}
      />
      <Label>Senha</Label>
      <InputPassword>
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Digite sua senha"
          value={values.password}
          onChange={handleChange}
        />
        <PasswordButton type="button" onClick={toggleShowPassword}>
          <img src="/password.png" alt="Mostrar/Esconder senha" />
        </PasswordButton>
      </InputPassword>

      <Button type="submit" color="secondary" size="large">
        Entrar
      </Button>
      <Button
        type="button"
        size="large"
        onClick={() => router.push("/register")}
      >
        Cadastrar
      </Button>
    </FormLogin>
  );
};

export default LoginPage;
