import styled from "styled-components";

export const Container = styled.div`
  padding-top: 13vh;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  min-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 460px) {
    min-width: 0;
    padding-top: 10vh;
  }
`;

export const TableOrders = styled.table`
  margin-bottom: 2rem;
  overflow: hidden;
  height: 20px;
  width: 70%;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    align-items: center;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  tr {
    .order-number {
      text-align: center;
    }
  }

  @media screen and (max-width: 460px) {
    font-size: 11px;
    width: 95%;
  }
`;

export const ContainerTable = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 70%;
  justify-content: left;

  @media screen and (max-width: 460px) {
    width: 95%;
  }
`;
