/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import { BASE_URL } from "../../constants/BASE_URL";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Input, Spinner } from "@chakra-ui/react";
import {
  Main,
  ContainerInformations,
  ContainerTable,
  ContainerInputSearchAndTotalPrice,
  ContainerBottomButtons,
} from "./styled";
import { useForm } from "../../hooks/useForms";
import SelectProductQuantity from "../../components/SelectProductQuantity/SelectProductQuantity";
import RegisterOrderProductsMap from "../../components/RegisterOrderProductsMap/RegisterOrderProductsMap";
import { registerOrder } from "../../services/Functions/registerOrder";
import useRequestProducts from "../../hooks/useRequestProducts";

function RegisterOrderPage() {
  useProtectedPage();

  const [products, isLoading] = useRequestProducts(
    [],
    `${BASE_URL}/products/?limit=50&offset=0`
  );
  const [inputSearch, setInputSearch] = useState("");
  const [productOrdered, setProductOrdered] = useState("");
  const [renderSelectProductQty, setRenderSelectProductQty] = useState(false);
  const [allProductsOrdered, setAllProductsOrdered] = useState([]);

  const [form, onChange, cleanFields] = useForm({
    clientName: "",
    deliveryDate: "",
  });

  const restartOrder = () => {
    cleanFields();
    localStorage.removeItem("products");
  };

  useEffect(() => {
    setAllProductsOrdered(JSON.parse(localStorage.getItem("products")) || []);
  }, [restartOrder]);

  const orderTotalPrice = allProductsOrdered
    ?.map((product) => product.totalPrice)
    .reduce((curr, prev) => curr + prev, 0).toFixed(2)

  return (
    <Main>
      <HeaderNavigation page="" />
      <ContainerInformations>
        <div>
          <p>Nome do cliente:</p>
          <Input
            required
            value={form.clientName}
            name="clientName"
            onChange={onChange}
            placeholder="Nome"
            _placeholder={{ color: "#b8b8b8" }}
            borderColor="#b8b8b8"
          ></Input>
        </div>
        <div>
          <p>Data da entrega:</p>
          <Input
            required
            value={form.deliveryDate}
            name="deliveryDate"
            onChange={onChange}
            type="date"
            _placeholder={{ color: "#b8b8b8" }}
            borderColor="#b8b8b8"
            placeholder="Data da entrega"
          ></Input>
        </div>
      </ContainerInformations>
      <ContainerInputSearchAndTotalPrice>
        <Input
          _placeholder={{ color: "#b8b8b8" }}
          borderColor="#b8b8b8"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Buscar produto"
        />
        <p>Preço total: R$ {orderTotalPrice}</p>
      </ContainerInputSearchAndTotalPrice>
      <ContainerTable>
        {isLoading ? (
          <Spinner className="spinner" marginTop="6rem" />
        ) : (
          <RegisterOrderProductsMap
            products={products}
            inputSearch={inputSearch}
            allProductsOrdered={allProductsOrdered}
            setProductOrdered={setProductOrdered}
            setRenderSelectProductQty={setRenderSelectProductQty}
          />
        )}
      </ContainerTable>
      {renderSelectProductQty && (
        <SelectProductQuantity
          productOrdered={productOrdered}
          setRenderSelectProductQty={setRenderSelectProductQty}
        />
      )}
      <ContainerBottomButtons>
        <button
          class="btn btn-secondary"
          onClick={() =>
            registerOrder(
              form,
              `${BASE_URL}/products/order`,
              allProductsOrdered,
              cleanFields,
              setInputSearch
            )
          }
          type="submit"
        >
          CONFIRMAR
        </button>
        <button
          class="btn btn-secondary"
          onClick={() => restartOrder()}
          type="submit"
        >
          CANCELAR
        </button>
      </ContainerBottomButtons>
    </Main>
  );
}

export default RegisterOrderPage;
