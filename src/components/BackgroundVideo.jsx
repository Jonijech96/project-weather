import React from "react";
import bgVideo from "../assets/gif/gifs";
import "./BackgroundVideo.css";

export const BackgroundVideo = ({ name }) => {
  return (
    <div className="content-video">
      <video loop autoPlay muted className="video">
        <source src={bgVideo[name]} type="video/mp4" />
      </video>
    </div>
  );
};
