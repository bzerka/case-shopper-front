import React, { useState } from "react";
import {
  Container,
  TableOrders,
  ContainerTable,
  ContainerStatus,
} from "./styled";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import { BASE_URL } from "../../constants/BASE_URL";
import useProtectedPage from "../../hooks/useProtectedPage";
import OrderProducts from "../../components/OrderProducts/OrderProducts";
import { Spinner } from "@chakra-ui/react";
import useRequestOrders from "../../hooks/useRequestOrders";
import { Select } from "@chakra-ui/react";

function OrderHistoryPage() {
  useProtectedPage();
  const [checkToRenderOrderProduct, setCheckToRenderOrderProduct] =
    useState(false);
  const [orderToRenderDetails, setOrderToRenderDetails] = useState("");
  const [orderStatus, setOrderStatus] = useState("unfinished");
  const [orders, isLoading] = useRequestOrders(
    [],
    `${BASE_URL}/users/orders`,
    checkToRenderOrderProduct
  );

  const showOrderProduct = (order) => {
    setOrderToRenderDetails(order);
    setCheckToRenderOrderProduct(!checkToRenderOrderProduct);
  };

  const fixDateFormat = (string) => {
    const [year, month, day] = string.slice(0, 10).split("-");
    return `${day}/${month}/${year}`;
  };

  const renderOrders = orders?.filter((order) => {
      switch (orderStatus) {
        case "unfinished":
          return new Date() < new Date(order.delivery_date);
        default:
          return new Date() > new Date(order.delivery_date);
      }
    })
    .sort((a, b) => new Date(a.delivery_date) - new Date(b.delivery_date))
    .map((order, index) => {
      return (
        <tr>
          <td className="order-number">{index + 1}</td>
          <td>{order.creator_name}</td>
          <td>{order.client_name}</td>
          <td>{fixDateFormat(order.delivery_date)}</td>
          <td>R$ {order.total_price}</td>
          <td onClick={() => showOrderProduct(order)}>Ver produtos</td>
        </tr>
      );
    });

  return (
    <Container>
      <HeaderNavigation page="history" />
      {checkToRenderOrderProduct && (
        <OrderProducts
          order={orderToRenderDetails}
          setCheckToRenderOrderProduct={setCheckToRenderOrderProduct}
        />
      )}
      <ContainerStatus>
        <p>Status: </p>
        <Select
          size="sm"
          width="170px"
          value={orderStatus}
          onChange={(e) => setOrderStatus(e.target.value)}
        >
          <option value="unfinished">Em andamento</option>
          <option value="finished">Entregue</option>
        </Select>
      </ContainerStatus>
      <ContainerTable>
        {isLoading ? (
          <Spinner className="spinner" marginTop="6rem" />
        ) : (
          <TableOrders>
            <tr>
              <th className="order-number">N°</th>
              <th>Funcionário</th>
              <th>Cliente</th>
              <th>Data de entrega</th>
              <th>Valor</th>
              <th>Produtos</th>
            </tr>
            {renderOrders}
          </TableOrders>
        )}
      </ContainerTable>
    </Container>
  );
}

export default OrderHistoryPage;
