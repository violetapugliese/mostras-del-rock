import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({music}) => (
  <div className="video">
    <ReactPlayer
      className="video_export"
      width="56"
      height="315"
      url={music}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default VideoPlayer;
