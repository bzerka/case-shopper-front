import styled from "styled-components";

export const ButtonAddProduct = styled.td`
  height: 100%;
  border: hidden;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonRemoveProduct = styled.td`
  display: flex;
  justify-content: center;
  height: 100%;
  color: red;

  &:hover {
    cursor: pointer;
  }
`;

export const TableProducts = styled.table`
  margin-bottom: 2rem;
  overflow: hidden;
  height: 20px;
  width: 100%;
  position: relative;

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
    .table-qty {
      text-align: center;
    }
  }

  .spinner {
    border: 1px solid black;
  }

  @media screen and (max-width: 460px) {
    font-size: 12px;
  }
`;
