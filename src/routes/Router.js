import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import OrderHistoryPage from "../pages/OrderHistoryPage/OrderHistoryPage";
import RegisterOrderPage from "../pages/RegisterOrderPage/RegisterOrderPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import StockPage from "../pages/StockPage/StockPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterOrderPage />}></Route>
        <Route path="/stock" element={<StockPage />}></Route>
        <Route path="/history" element={<OrderHistoryPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
