import React from "react";

const VideoData = ({name, year, country}) => (
  <div className="w-full shadow-md myBorder bg-black text-white border-2 rounded-b-xl p-4 myShadow">
    <h3 id="nameArtist" className="text-lg font-semibold">
      {name}
    </h3>
    <p id="yearsArtist" className="text-sm">
      {year}
    </p>
    <p id="countryArtist" className="text-sm">
      {country}
    </p>
    <h4 id="videoArtist" className="text-md">
      Nombre de la canción - Artista
    </h4>
  </div>
);

export default VideoData;
