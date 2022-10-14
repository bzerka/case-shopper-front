import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForms";
import goToPage from "../../routes/coordinator";
import { signup } from "../../services/Functions/signUp";
import { Container } from "./styled";
import { Main } from "./styled";

function SignupPage() {
  const navigate = useNavigate();

  const [form, onChange, cleanFields] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitFormToSignup = (e) => {
    e.preventDefault();
    signup(form, cleanFields, navigate);
  };

  return (
    <Container>
      <Main>
        <h1>Faça seu cadastro</h1>
        <form onSubmit={onSubmitFormToSignup}>
          <div class="form-floating">
            <input
              value={form.name}
              name="name"
              required
              onChange={onChange}
              placeholder="Nome"
              class="form-control"
              id="floatingInput"
            />
            <label for="floatingInput">Nome</label>
          </div>
          <div class="form-floating">
            <input
              value={form.email}
              type="email"
              name="email"
              required
              onChange={onChange}
              class="form-control"
              id="floatingPassword"
              placeholder="Email"
            />
            <label for="floatingPassword">Email</label>
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
            onClick={() => onSubmitFormToSignup()}
            type="submit"
          >
            CONTINUAR
          </button>
          <button
            class="btn btn-secondary"
            onClick={() => goToPage(navigate, "login")}
          >
            VOLTAR
          </button>
        </form>
      </Main>
    </Container>
  );
}

export default SignupPage;
