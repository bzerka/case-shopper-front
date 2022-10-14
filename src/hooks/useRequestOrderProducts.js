import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

const useRequestOrderProducts = (id, setCheckToRenderOrderProduct, updateProducts) => {
  const [orderProducts, setOrderProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${BASE_URL}/users/orders/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setOrderProducts(res.data.orderDetails);
      })
      .catch((err) => {
        if (
          err.request.response ===
          '{"message":"Não existe um pedido com este id."}'
        ) {
            setCheckToRenderOrderProduct(false);
        }
      });
    }, [setCheckToRenderOrderProduct, updateProducts]);

    return orderProducts;
};

export default useRequestOrderProducts;
