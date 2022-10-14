import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  width: 100%;
  min-width: 400px;
  justify-content: center;
  align-items: center;
  background-color: #cac7cc;

  @media screen and (max-width: 400px) {
    min-width: 0;
    width: 100%;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;
  padding: 2rem 0;
  border-radius: 6px;
  background-color: white;
  width: 30%;
  min-width: 25rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    min-width: 0;
  }
`;

export const RedirectToSignupPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: blue;
  }
`;
