import React from "react";
import "./contentArea.css";
import { Home } from "../pages/Home/Home.jsx";
import { Explore } from "../pages/Explore/Explore.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const ContentArea = () => {
  return (
    <div className="content__area">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
};
