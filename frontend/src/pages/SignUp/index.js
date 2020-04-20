import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatorio"),
  password: Yup.string()
    .min("No mínimo 6 caracteres")
    .required("A senha é obrigatória"),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu E-Mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua Senha Secreta"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
