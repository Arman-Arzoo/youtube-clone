import React from "react";
import "./youtube.css";
import { Yheader } from "./components/Yheader.jsx";
import { Ysidebar } from "./components/Ysidebar.jsx";

import { ContentArea } from "./components/ContentArea.jsx";

export const Youtube = () => {
  return (
    <div>
      <Yheader />
      <div className="content__main">
        <Ysidebar />
        <ContentArea />
      </div>
    </div>
  );
};
