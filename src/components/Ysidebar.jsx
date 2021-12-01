import React from "react";
import "./ysidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/ExploreOutlined";
import SubscribeIcon from "@material-ui/icons/SubscriptionsOutlined";
import LibraryIcon from "@material-ui/icons/VideoLibraryOutlined";
import { NavLink } from "react-router-dom";
export const Ysidebar = () => {
  return (
    <div className="ySidebar">
      <div className="ySidebar__nav">
        <NavLink to="/">
          <div className="ysidebar__navOption">
            <HomeIcon className="ySidebar__HomeIcon" />
            <p className="ySidebar__text">Home</p>
          </div>
        </NavLink>

        <NavLink to="/explore">
          <div className="ysidebar__navOption ">
            <ExploreIcon className="ySidebar__HomeIcon" />
            <p className="ySidebar__text">Explore</p>
          </div>
        </NavLink>

        <NavLink to="/subscription">
          <div className="ysidebar__navOption">
            <SubscribeIcon className="ySidebar__HomeIcon" />
            <p className="ySidebar__text">Subscriptions</p>
          </div>
        </NavLink>
        <NavLink to="/Library">
          <div className="ysidebar__navOption">
            <LibraryIcon className="ySidebar__HomeIcon" />
            <p className="ySidebar__text">Library</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
