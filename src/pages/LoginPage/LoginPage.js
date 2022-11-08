import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Main, RedirectToSignupPage } from "./styled";
import goToPage from "../../routes/coordinator";
import { login } from "../../services/Functions/login";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });

    if (!!errors[name])
      setErrors({
        ...errors,
        [name]: null,
      });
  };

  const cleanFields = () => {
    setForm("");
  };

  const validateForm = async () => {
    const { email, password } = form;

    const newErrors = {};

    if (!email || email === "") newErrors.email = "Insira seu email.";
    if (!password || password === "") newErrors.password = "Insira sua senha.";

    try {
      await axios.post(`${BASE_URL}/users/login`, form);
    } catch (err) {
      if (err.response?.data.message === "Este email ainda não foi cadastrado.")
        newErrors.email = err.response?.data.message;
      else if (
        err.response?.data.message ===
        "Por favor verifique se o formato do email está correto."
      )
        newErrors.email = "Formato do email inválido.";
      else if (
        err.response?.data.message ===
        "Campo 'password' precisa ter no mínimo 6 caracteres."
      )
        newErrors.password = "Senha precisa conter 6 ou mais caracteres.";
      else if (err.response?.data.message === "Senha inserida está incorreta.")
        newErrors.password = "Senha incorreta.";
    }

    return newErrors;
  };

  const onSubmitFormToLogin = async (e) => {
    e.preventDefault();

    const formErrors = await validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      login(form, cleanFields, navigate);
    }
  };

  return (
    <Container>
      <Main>
        <h1>Faça seu login</h1>
        <Form>
          <Form.Group controlId="email">
            <FloatingLabel label="Email address" className="mb-3">
              <Form.Control
                value={form.email}
                name="email"
                onChange={(e) => setField("email", e.target.value)}
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="Email"
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="email">
            <FloatingLabel label="Password" className="mb-3">
              <Form.Control
                value={form.password}
                minLength={6}
                name="password"
                onChange={(e) => setField("password", e.target.value)}
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Senha"
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Button
            className="my-2"
            variant="secondary"
            onClick={onSubmitFormToLogin}
            type="submit"
          >
            CONTINUAR
          </Button>
        </Form>
        <RedirectToSignupPage onClick={() => goToPage(navigate, "signup")}>
          <p>Ainda não possuo cadastro</p>
          <ChevronRightIcon />
        </RedirectToSignupPage>
      </Main>
    </Container>
  );
}

export default LoginPage;
