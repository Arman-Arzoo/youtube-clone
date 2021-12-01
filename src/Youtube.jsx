import React from "react";
import "./youtube.css";
import { Yheader } from "./components/Yheader.jsx";
import { Ysidebar } from "./components/Ysidebar.jsx";
import { BrowserRouter } from "react-router-dom";
import { ContentArea } from "./components/ContentArea.jsx";

export const Youtube = () => {
  return (
    <BrowserRouter>
      <div>
        <Yheader />
        <div className="content__main">
          <Ysidebar />
          <ContentArea />
        </div>
      </div>
    </BrowserRouter>
  );
};
