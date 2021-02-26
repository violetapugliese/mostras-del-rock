import React from "react";

import playIcon from '../assets/static/playIcon.png';
// import disLikeIcon from '../assets/static/disLikeIcon.png';
// import likeIcon from '../assets/static/likeIcon.png'

const ListItem = ({}) => (
  <div className="flex items-center justify-between w-5/6 h-auto bg-white shadow-md rounded-full m-2 p-1">
    <figure className="inline-block w-14 h-14 rounded-full bg-gray-800">
      <img src="" alt="" />
    </figure>
    <p>Nombre de la Artista</p>
    <div className="flex w-8 h-8">
        <img className="inline-block w-8 h-8" src={playIcon} alt="playIcon"/>
        {/* <img className="inline-block w-8 h" src={disLikeIcon} alt="disLikeIcon"/> */}
    </div>
  </div>
);

export default ListItem;
