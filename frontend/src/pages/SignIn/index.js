import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signInRequest } from "../../store/modules/auth/actions";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatorio"),
  password: Yup.string().required("A senha é obrigatória"),
});

export default function SignIn() {
  const dispatch = useDispatch();
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="email" type="email" placeholder="Seu E-Mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua Senha Secreta"
        />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
