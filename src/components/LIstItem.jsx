import React, { useState, useEffect } from "react";
import insertVideo from "../hooks/insertVideo";

import playIcon from "../assets/static/playIcon.png";
// import disLikeIcon from '../assets/static/disLikeIcon.png';
// import likeIcon from '../assets/static/likeIcon.png'

const ListItem = ({ id, music, name, image}) => {
  return (
    <div className="group flex flew-wrap w-5/6 items-center justify-between h-auto bg-white  shadow-lg rounded-full m-2 p-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
      <figure className="inline-block w-14 h-14 photoWidth rounded-full bg-gray-800">
        <img src={`${image}`} alt="imagen" className="rounded-full" />
      </figure>
      <p className="mx-2 text-center">{name}</p>
      <button
        id="playButton"
        type="button"
        className="flex w-8 h-8 mr-2 focus:outline-none focus-visible:underline rounded-full active:bg-green-700"
      >
        <img
          className="inline-block w-8 h-8 playVideoWidth"
          src={playIcon}
          alt="playIcon"
        />
        
      </button>
    </div>
  );
};

export default ListItem;
