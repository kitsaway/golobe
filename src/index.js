import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./styles/styles";
import theme from "./Theme";
import App from "./App";
import Login from "./components/Login/index";
import RecoverPassword from "./components/RecoverPassword";
import VerifyCode from "./components/VerifyCode/index";
import ResetPassword from "./components/ResetPassword/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
