import goToPage from "../routes/coordinator";

export const logout = (Navigate) => {
    localStorage.removeItem('token')
    localStorage.removeItem('products')
    goToPage(Navigate, "login");
  };