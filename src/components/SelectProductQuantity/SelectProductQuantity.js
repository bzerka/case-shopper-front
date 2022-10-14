import React from "react";
import { useState } from "react";
import { ContainerQuantity, ContainerForm } from "./styled";
import { addProductLocalStorage } from "../../utils/addProductLocalStorage";

function SelectProductQuantity({ productOrdered, setRenderSelectProductQty }) {
  const [qtyOrdered, setQtyOrdered] = useState(1);

  const addProductToOrder = () => {
    addProductLocalStorage(productOrdered, qtyOrdered);
    setRenderSelectProductQty(false);
  };

  return (
    <ContainerQuantity>
      <div
        id="background-top"
        onClick={() => setRenderSelectProductQty(false)}
      ></div>
      <div
        id="background-bottom"
        onClick={() => setRenderSelectProductQty(false)}
      ></div>
      <div id="container-select">
        <p>Selecione a quantidade desejada</p>
        <ContainerForm>
          <input
            value={qtyOrdered}
            onChange={(e) => setQtyOrdered(e.target.value)}
            placeholder="Insira a quantidade"
          />
          <button
            id="button-add-to-cart"
            type="button"
            onClick={() => addProductToOrder()}
          >
            ADICIONAR
          </button>
        </ContainerForm>
      </div>
    </ContainerQuantity>
  );
}

export default SelectProductQuantity;
