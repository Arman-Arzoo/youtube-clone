import React from "react";
import "./ysidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/ExploreOutlined";
import SubscribeIcon from "@material-ui/icons/SubscriptionsOutlined";
import LibraryIcon from "@material-ui/icons/VideoLibraryOutlined";
export const Ysidebar = () => {
  return (
    <div className="ySidebar">
      <div className="ySidebar__nav">
        <div className="ysidebar__navOption">
          <HomeIcon className="ySidebar__HomeIcon" />
          <p className="ySidebar__text">Home</p>
        </div>

        <div className="ysidebar__navOption ">
          <ExploreIcon className="ySidebar__HomeIcon" />
          <p className="ySidebar__text">Explore</p>
        </div>

        <div className="ysidebar__navOption">
          <SubscribeIcon className="ySidebar__HomeIcon" />
          <p className="ySidebar__text">Subscritions</p>
        </div>

        <div className="ysidebar__navOption">
          <LibraryIcon className="ySidebar__HomeIcon" />
          <p className="ySidebar__text">Library</p>
        </div>
      </div>
    </div>
  );
};
