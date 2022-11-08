import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import goToPage from "../../routes/coordinator";

export const login = async (body, clear, Navigate) => {
  await axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToPage(Navigate, "");
    })
    .catch((err) => {
    });
};