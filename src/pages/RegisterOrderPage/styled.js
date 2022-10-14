import styled from "styled-components";

export const Main = styled.div`
  min-height: 100vh;
  width: 100%;
  min-width: 900px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 12vh;

  h1 {
    font-size: 2rem;
  }

  @media screen and (max-width: 460px) {
    min-width: 0;
    width: 100%;
    padding-top: 10vh;
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  height: 366px;
  overflow: auto;

  @media screen and (max-width: 460px) {
    width: 90%;
    margin-top: 0.3rem;
  }
`;

export const ButtonAddProduct = styled.td`
  display: flex;
  justify-content: center;
  height: 65px;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonRemoveProduct = styled.td`
  display: flex;
  justify-content: center;
  height: 65px;
  color: red;

  &:hover {
    cursor: pointer;
  }
`;

export const ContainerQuantity = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  #background-top {
    height: 225px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  #background-bottom {
    height: 223px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #container-select {
    min-width: 400px;
    height: 216px;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      width: 296px;
      height: 18px;
      margin: 40px 0 0 16px;
      font-size: 16px;
      letter-spacing: -0.39px;
      text-align: center;
      color: #000;
    }

    #button-add-to-cart {
      bottom: 16px;
      right: 11px;
      border: none;
      width: 200px;
      letter-spacing: -0.39px;
      font-size: 16px;
      color: #4a90e2;
    }
  }
`;

export const ContainerForm = styled.div`
  width: 80%;
  height: 4rem;
  margin-top: 2rem;
  border-radius: 4px;
  padding: 0 2rem;
  border: solid 1px #b8b8b8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerInformations = styled.div`
  display: flex;
  align-items: left;
  width: 70%;
  margin-bottom: 1.5rem;
  gap: 1rem;

  div {
    width: 100%;
  }

  @media screen and (max-width: 460px) {
    justify-content: center;
    width: 90%;

    input {
      font-size: 14px;
    }
  }
`;

export const ContainerInputSearchAndTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  gap: 1rem;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    text-align: end;
  }

  input {
    width: 96%;
    max-width: 470px;
  }

  @media screen and (max-width: 460px) {
    width: 90%;
    justify-content: center;

    input {
      width: 100%;
      font-size: 14px;
    }

    p {
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
export const ContainerBottomButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  .btn {
    background-color: #cac7cc;
    border-color: #cac7cc;
    color: black;
    font-size: 14px;
    font-weight: bold;
  }
`;
