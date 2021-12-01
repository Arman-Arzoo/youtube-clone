import React from "react";
import MicIcon from "@material-ui/icons/Mic";
import VideoIcon from "@material-ui/icons/VideoCallOutlined";
import AppIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import "./yHeader.css";
import ylogo from "../components/ylogo.png";
export const Yheader = () => {
  return (
    <div className="yHeader">
      <MenuIcon className="yHeader_MenuIcon" />
      <div className="yHeader__logo">
        <img src={ylogo} alt="" />
        <span>
          <sup>Pk</sup>
        </span>
      </div>

      <div className="yHeader__search">
        <input
          type="text"
          placeholder="Search"
          className="yHeader__searchInput"
        />
        <SearchIcon className="yHeader__searchIcon" />
        <MicIcon className="yHeader__searchMicIcon" />
      </div>

      <div className="yHeader__nav">
        <VideoIcon className="yHeader__navOption" />
        <AppIcon className="yHeader__navOption" />
        <NotificationIcon className="yHeader__navOption" />

        <img src="" alt="" className="yHeader__navProfile yHeader__navOption" />
      </div>
    </div>
  );
};
