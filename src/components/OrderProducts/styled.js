import styled from "styled-components";

export const Container = styled.div`
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
`;

export const ContainerProducts = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  width: 70%;
  height: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;

  .section-products {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 18px;
    margin-bottom: 0.5rem;
    overflow: auto;
  }

  .section-buttons {
    display: flex;
    gap: 0.5rem;

    .btn {
      background-color: #cac7cc;
      border-color: #cac7cc;
      color: black;
      font-size: 14px;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 460px) {
    width: 95%;
  }
`;

export const TableProducts = styled.table`
  font-size: 12px;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 6px;
  }

  .produt-qty-center {
    text-align: center;
  }

  .delete-button {
    text-align: center;
  }
`;
