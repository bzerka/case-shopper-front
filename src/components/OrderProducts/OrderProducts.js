import React, { useState } from "react";
import { Container, ContainerProducts, TableProducts } from "./styled";
import { Icon } from "@chakra-ui/react";
import { MdDeleteForever } from "react-icons/md";
import { deleteOrder } from "../../services/Functions/deleteOrder";
import { removeProduct } from "../../services/Functions/deleteProduct";
import useRequestOrderProducts from "../../hooks/useRequestOrderProducts";

function OrderProducts({ order, setCheckToRenderOrderProduct }) {
  const [updateProducts, setUpdateProducts] = useState(false);
  const orderProducts = useRequestOrderProducts(
    order.id,
    setCheckToRenderOrderProduct,
    updateProducts
  );

  const renderOrderProducts = orderProducts?.map((product) => {
    return (
      <tr>
        <td>{product.product_name}</td>
        <td className="produt-qty-center">{product.product_qty}</td>
        <td className="delete-button">
          <Icon
            onClick={() =>
              removeProduct(order.id, product.product_name, setUpdateProducts)
            }
            cursor="pointer"
            width="20px"
            height="20px"
            as={MdDeleteForever}
          />
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <ContainerProducts>
        <section className="section-products">
          <p>
            <strong>Funcionário:</strong> {order.creator_name}
          </p>
          <p>
            <strong>Cliente:</strong> {order.client_name}
          </p>
          <TableProducts>
            <tr>
              <th>Produto</th>
              <th className="produt-qty-center">Quantidade</th>
            </tr>
            {renderOrderProducts}
          </TableProducts>
        </section>
        <section className="section-buttons">
          <button
            class="btn btn-secondary"
            onClick={() => deleteOrder(order.id, setUpdateProducts)}
          >
            DELETAR
          </button>
          <button
            class="btn btn-secondary"
            onClick={() => setCheckToRenderOrderProduct(false)}
          >
            VOLTAR
          </button>
        </section>
      </ContainerProducts>
    </Container>
  );
}

export default OrderProducts;
