import React from "react";
import "./App.css";
import "@fontsource/roboto";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "./Screen/LoginPage";

const AppHome = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="signIn" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default AppHome;
