import React from "react";

export const Youtube = () => {
  return (
    <div className="home__video">
      <img
        src="https://louisem.com/wp-content/uploads/2017/06/youtube-thumbnail-FB.jpg"
        alt=""
        className="home__videoImg"
      />
      <div className="home__videoHeadline">
        <img
          src="https://yt3.ggpht.com/yti/APfAmoGohKC3_VJIpumrXtEn6KOnWu3QRoASDo3ozI3B=s108-c-k-c0x00ffffff-no-rj"
          alt=""
          className="home__videoHeadlineImg"
        />
        <h5 className="home__videoHeadlineTitle">
          Zero to Full-Time Programmer in 5 Steps
        </h5>
      </div>

      <p className="home__vidoeChannel">Village Food </p>
      <div className="home__videoInfo">
        <p className="home__videoInfoView">48k views</p>
        <p className="home__videoInfoTime">3 hours ago</p>
      </div>
    </div>
  );
};
