import React, { useState } from "react";
import { Input, Select, Spinner } from "@chakra-ui/react";
import { BASE_URL } from "../../constants/BASE_URL";
import {
  Container,
  ContainerInput,
  ContainerTable,
  TableProducts,
  TrMap,
} from "./styled";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestProducts from "../../hooks/useRequestProducts";

function StockPage() {
  useProtectedPage();

  const [products, isLoading] = useRequestProducts(
    [],
    `${BASE_URL}/products/?limit=50&offset=0`
  );
  const [inputSearch, setInputSearch] = useState("");
  const [selectOrdination, setSelectOrdination] = useState("");

  const renderProducts = products
    .filter((product) => {
      return product.name.includes(inputSearch.toUpperCase()) || product.id.includes(inputSearch);
    })
    .sort((productA, productB) => {
      switch (selectOrdination) {
        case "stock":
          return productA.qty_stock - productB.qty_stock;
        default:
          return null;
      }
    })
    .map((product) => {
      return (
        <TrMap stock={product.qty_stock}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.qty_stock}</td>
        </TrMap>
      );
    });

  return (
    <Container>
      <HeaderNavigation page={"stock"} />
      <ContainerInput>
        <Input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          width="400px"
          placeholder="Buscar produto"
          _placeholder={{ color: "#b8b8b8" }}
          borderColor="#b8b8b8"
        />
        <Select
          width="150px"
          value={selectOrdination}
          onChange={(e) => setSelectOrdination(e.target.value)}
        >
          <option value="product">Produto</option>
          <option value="stock">Estoque</option>
        </Select>
      </ContainerInput>
      <ContainerTable>
        {isLoading ? (
          <Spinner className="spinner" marginTop="6rem" />
        ) : (
          <TableProducts>
            <tr>
              <th>ID</th>
              <th className="cursor-pointer" onClick={() => setSelectOrdination("product")}>Produto</th>
              <th className="cursor-pointer" onClick={() => setSelectOrdination("stock")}>Estoque</th>
            </tr>
            {renderProducts}
          </TableProducts>
        )}
      </ContainerTable>
    </Container>
  );
}

export default StockPage;
