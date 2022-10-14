import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Main, RedirectToSignupPage } from "./styled";
import { useForm } from "../../hooks/useForms";
import goToPage from "../../routes/coordinator";
import { login } from "../../services/Functions/login";
import { ChevronRightIcon } from "@chakra-ui/icons";

function LoginPage() {
  const navigate = useNavigate();

  const [form, onChange, cleanFields] = useForm({
    email: "",
    password: "",
  });

  const onSubmitFormToLogin = (e) => {
    e.preventDefault();
    login(form, cleanFields, navigate);
  };

  return (
    <Container>
      <Main>
        <h1>Faça seu login</h1>
        <form onSubmit={onSubmitFormToLogin}>
          <div class="form-floating">
            <input
              value={form.email}
              name="email"
              required
              onChange={onChange}
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="Email"
            />
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating">
            <input
              minLength={"6"}
              value={form.password}
              name="password"
              required
              onChange={onChange}
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Senha"
            />
            <label for="floatingPassword">Senha</label>
          </div>
          <button
            class="btn btn-secondary"
            onClick={() => onSubmitFormToLogin()}
            type="submit"
          >
            CONTINUAR
          </button>
          <RedirectToSignupPage onClick={() => goToPage(navigate, "signup")}>
            <p>Ainda não possuo cadastro</p>
            <ChevronRightIcon />
          </RedirectToSignupPage>
        </form>
      </Main>
    </Container>
  );
}

export default LoginPage;
