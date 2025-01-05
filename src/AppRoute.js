import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage";
import Wallet from "./Pages/wallet";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login Page */}
        <Route path="/wallet" element={<Wallet />} /> {/* Wallet Page */}
      </Routes>
    </Router>
  );
};

export default AppRoute;
