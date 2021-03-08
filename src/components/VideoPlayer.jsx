import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({children}) => {

  return (
    <div className="video">
      {children}
  </div>
      )
  };

export default VideoPlayer;
