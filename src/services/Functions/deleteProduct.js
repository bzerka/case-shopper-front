import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

export const removeProduct = (orderId, productName, setUpdateProducts) => {
  const token = localStorage.getItem("token");

  axios
    .delete(`${BASE_URL}/products/delete/${orderId}/${productName}`, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      setUpdateProducts('update1')
    })
    .catch((err) => {});
};
