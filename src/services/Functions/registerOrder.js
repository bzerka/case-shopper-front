import axios from "axios";
import { alertSweet } from "../../utils/AlertSweet/alertSweet";

export const registerOrder = (form, url, allProductsOrdered, cleanFields, setInputSearch) => {
  const token = localStorage.getItem("token");

  const body = {
    ...form,
    products: allProductsOrdered,
  };

  axios
    .post(url, body, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      setInputSearch("")
      cleanFields();
      localStorage.removeItem("products");
      alertSweet("success", "Sucesso!", "Pedido registrado com sucesso.");
    })
    .catch((err) => {
      setInputSearch("")
      alertSweet(
        "error",
        "Falhou!",
        err.request.response.slice(12, 130).slice(0, -2)
      );
    });
};
