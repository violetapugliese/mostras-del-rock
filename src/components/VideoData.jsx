import React from "react";

const VideoData = ({name, year, country, info}) => (
  <div className="w-full shadow-md myBorder bg-black text-white border-2 rounded-b-xl p-4 mt-4 myShadow">
    <h3 id="nameArtist" className="text-lg font-semibold">
      {name}
    </h3>
    <p id="yearsArtist" className="text-sm">
      {year}
    </p>
    <p id="countryArtist" className="text-sm">
      {country}
    </p>
    <a href={`${info}`} className="myText" >Leer + </a>
  </div>
);

export default VideoData;
