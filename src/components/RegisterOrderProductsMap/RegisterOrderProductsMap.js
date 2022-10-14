import React from "react";
import { ButtonAddProduct, ButtonRemoveProduct, TableProducts } from "./styled";
import { checkIfProductIsOnLocalStorage } from "../../utils/checkIfProductIsOnLocalStorage";
import { productQuantityOrdered } from "../../utils/calcProductQuantityOrdered";
import { removeProductLocalStorage } from "../../utils/removeProductLocalStorage";

function RegisterOrderProductsMap({
  products,
  inputSearch,
  allProductsOrdered,
  setProductOrdered,
  setRenderSelectProductQty,
}) {
  const showContainerToAddQuantity = (product) => {
    setProductOrdered(product);
    setRenderSelectProductQty(true);
  };

  const renderProducts = products
    .filter((product) => {
      return product.name.includes(inputSearch.toUpperCase());
    })
    .map((product) => {
      return (
        <tr>
          <td>{product.name}</td>
          <td className="table-qty">
            {productQuantityOrdered(product.name, allProductsOrdered)}
          </td>
            {checkIfProductIsOnLocalStorage(
              product.name,
              allProductsOrdered
            ) ? (
              <ButtonRemoveProduct
                id="button-remove"
                onClick={() => removeProductLocalStorage(product.name)}
              >
                Remover
              </ButtonRemoveProduct>
            ) : (
              <ButtonAddProduct
                onClick={() => showContainerToAddQuantity(product)}
              >
                Adicionar
              </ButtonAddProduct>
            )}
        </tr>
      );
    });

  return (
    <TableProducts>
      <tr>
        <th>Produto</th>
        <th className="table-qty">Quantidade</th>
      </tr>
      {renderProducts}
      {renderProducts.length === 0 && <td>Produto não encontrado.</td>}
    </TableProducts>
  );
}

export default RegisterOrderProductsMap;
