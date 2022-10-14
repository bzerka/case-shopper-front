import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 900px;
  padding-top: 12vh;
  gap: 0.5rem;

  @media screen and (max-width: 460px) {
    min-width: 0;
    padding-top: 10vh;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: 460px) {
    width: 95%;
    justify-content: center;

    div {
      display: none;
    }

    input {
      font-size: 14px;
      width: 100%;
    }
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TableProducts = styled.table`
  margin-bottom: 2rem;
  width: 70%;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  .cursor-pointer {
    &:hover {
      cursor: pointer;
    }
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  @media screen and (max-width: 460px) {
    width: 95%;
    font-size: 12px;
  }
`;

export const TrMap = styled.tr`
  td {
    color: ${(props) => {
      if (props.stock < 10) {
        return "red";
      } else {
        return null;
      }
    }};
  }
`;
