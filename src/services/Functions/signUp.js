import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import goToPage from "../../routes/coordinator";
import { alertSweet } from "../../utils/AlertSweet/alertSweet";

export const signup = (body, clear, Navigate) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      clear();
      alertSweet("success", "Sucesso!", res.data.message);
      localStorage.setItem("token", res.data.token);
      goToPage(Navigate, "login");
    })
    .catch((err) => {
      alertSweet("error", "Falhou!", err.response.data.message);
    });
};
