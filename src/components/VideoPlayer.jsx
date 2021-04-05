import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({children}) => {

  return (
    <div className="video shadow-md myBorder bg-black text-white border-2 p-4 myShadow">
      {children}
  </div>
      )
  };

export default VideoPlayer;
