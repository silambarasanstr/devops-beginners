import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<>Login Page</>} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
