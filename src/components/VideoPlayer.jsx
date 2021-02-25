import React from "react";

const VideoPlayer = () => (
  <div className="video">
    <iframe
      className="video_export"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/PqN8IN8TMC8"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

export default VideoPlayer;
