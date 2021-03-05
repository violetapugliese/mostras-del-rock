import React, { useState, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ReactPlayer from "react-player";
import { render } from 'react-dom';


const insertVideo = (music) => {
    console.log(music)
    // const [video, setVideo] = useState()
    // useEffect(() => {
    //     fetch(music)
    //      .then((response) => response.toString())
    //      .then((data) => setVideo(data))
    // }, []);
    // console.log(video)
    return (
    <VideoPlayer>
        <ReactPlayer
            className="video_export"
            width="56"
            height="315"
            url={music}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </VideoPlayer>
)
  
};

export default insertVideo;