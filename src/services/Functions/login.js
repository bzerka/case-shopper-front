import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import goToPage from "../../routes/coordinator";
import { alertSweet } from "../../utils/AlertSweet/alertSweet";

export const login = (body, clear, Navigate) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToPage(Navigate, "");
    })
    .catch((err) => {
      alertSweet("error", "Falhou!", err.response.data.message);
    });
};