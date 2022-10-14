import styled from "styled-components";

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
    /* width: 34%; */
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
