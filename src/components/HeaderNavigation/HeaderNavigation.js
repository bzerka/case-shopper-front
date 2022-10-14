import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerSideBar, DesktopSection, MobileSection, Title } from "./styled";
import goToPage from "../../routes/coordinator";
import { logout } from "../../utils/logout";
import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { GrLogout } from "react-icons/gr";
import { HamburgerIcon } from "@chakra-ui/icons";

function HeaderNavigation(props) {
  const navigate = useNavigate();

  return (
    <ContainerSideBar>
      <DesktopSection>
        {props.page === "" ? (
          <button
            onClick={() => goToPage(navigate, "")}
            bg="black"
            className="current-page"
          >
            Cadastrar pedido
          </button>
        ) : (
          <button onClick={() => goToPage(navigate, "")}>
            Cadastrar pedido
          </button>
        )}
        {props.page === "history" ? (
          <button
            className="current-page"
            onClick={() => goToPage(navigate, "history")}
            bg="black"
          >
            Histórico de pedidos
          </button>
        ) : (
          <button onClick={() => goToPage(navigate, "history")}>
            Histórico de pedidos
          </button>
        )}
        {props.page === "stock" ? (
          <button
            className="current-page"
            onClick={() => goToPage(navigate, "stock")}
            bg="black"
          >
            Estoque
          </button>
        ) : (
          <button onClick={() => goToPage(navigate, "stock")}>Estoque</button>
        )}
        <Icon
          className="logout-icon"
          as={GrLogout}
          onClick={() => logout(navigate)}
        />
      </DesktopSection>
      <MobileSection>
        <Title>
          {props.page === "" && <p>Cadastrar um pedido</p>}
          {props.page === "history" && <p>Histórico de pedidos</p>}
          {props.page === "stock" && <p>Estoque</p>}
        </Title>
        <Menu>
          <MenuButton
            border="none"
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon w={8} h={8} />}
            variant="outline"
          />
          <MenuList>
            <MenuItem onClick={() => goToPage(navigate, "")}>
              Cadastrar pedido
            </MenuItem>
            <MenuItem onClick={() => goToPage(navigate, "history")}>
              Histórico de pedidos
            </MenuItem>
            <MenuItem onClick={() => goToPage(navigate, "stock")}>
              Estoque
            </MenuItem>
            <MenuItem onClick={() => logout(navigate)}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </MobileSection>
    </ContainerSideBar>
  );
}

export default HeaderNavigation;
