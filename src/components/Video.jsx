import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "regenerator-runtime/runtime";
import VideoPlayer from "./VideoPlayer";
import VideoData from "./VideoData";
import ReactPlayer from "react-player";

// const API = "http://localhost:3000/initialState";
const API = "https://violetapugliese.github.io/mdrAPIRest/db.json";

const Video = ({}) => {
  const { name } = useParams();
  // console.log(id);

  const [mostra, setMostra] = useState({ mdr: [] });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setMostra(data));
    return mostra;
  }, []);

  let music;
  let year;
  let country;

  const found = (name) => {
    mostra.mdr.find((item) => {
      if (item.name === name) {
        music = item.music;
        year = item.year;
        country = item.country;
      }
    });
  };
  
  if (name == null) {
    music = "https://www.youtube.com/watch?v=ykxuu8LNluY";
    let name = "Aretha Franklin";
    year = "1942 - 2018";
    country = "USA";
  } else {
    found(name);
  }

  // console.log(music);

  return (
    <div className="mb-4 lg:w-4/6 lg:inline-block text-yellow-50">
      <VideoPlayer>
        <ReactPlayer
          className="video_export"
          width="56"
          height="315"
          url={`${music}`}
          frameBorder="0"
          controls
          // playing
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoPlayer>
      <VideoData name={name} year={year} country={country} />
    </div>
  );
};

export default Video;
