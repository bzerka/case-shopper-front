import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  width: 100%;
  min-width: 460px;
  justify-content: center;
  align-items: center;
  background-color: #cac7cc;

  @media screen and (max-width: 460px) {
    min-width: 0;
    width: 100%;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
  padding: 2rem 0;
  border-radius: 6px;
  background-color: white;
  width: 30%;
  min-width: 25rem;

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    padding-top: 5.5rem;
  }

  @media screen and (max-width: 460px) {
    width: 100%;
    min-width: 0;
    max-height: 700px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: .5rem;
`
