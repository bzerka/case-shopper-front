import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

export const deleteOrder = (id, setUpdateProducts) => {

    const token = localStorage.getItem("token");

    axios
      .delete(`${BASE_URL}/products/delete/order/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setUpdateProducts('update2');
      })
      .catch((err) => {
      });
  };