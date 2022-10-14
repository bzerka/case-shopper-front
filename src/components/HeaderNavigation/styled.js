import styled from "styled-components";

export const ContainerSideBar = styled.div`
  width: 100%;
  min-width: 900px;
  height: 10vh;
  background-color: #cac7cc;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  z-index: 2;

  @media screen and (max-width: 460px) {
    min-width: 0;
    width: 100%;
    flex-direction: column;
    height: 8vh;
  }
`;

export const DesktopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 250px;
    height: 10vh;
  }
  .current-page {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  }

  .logout-icon {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 2%;
    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 460px) {
    display: none;

    button {
      height: 150px;
      width: 180px;
    }
  }
`;

export const MobileSection = styled.div`
  display: none;
  
  @media screen and (max-width: 460px) {
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 1rem;
    height: 100%;
    position: relative;
  
  }
`;

export const Title = styled.div`
  width: 60%;
  position: absolute;
  text-align: center;
  left: 20%;

  p {
    font-size: 20px;
  }
`
