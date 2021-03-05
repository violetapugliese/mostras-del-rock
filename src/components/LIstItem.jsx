import React, { useState, useEffect } from "react";
import insertVideo from '../hooks/insertVideo'

import playIcon from '../assets/static/playIcon.png';
// import disLikeIcon from '../assets/static/disLikeIcon.png';
// import likeIcon from '../assets/static/likeIcon.png'

const ListItem = ({id, music, name}) => {
 
   return(
    <div className="flex flew-wrap items-center justify-between w-5/6 h-auto bg-white shadow-lg rounded-full m-2 p-1 ">
    <figure className="inline-block w-14 h-14 photoWidth rounded-full bg-gray-800">
      <img src="" alt="" />
    </figure>
    <p className="mx-2 text-center">{name}</p>
    <p className="mx-2 text-center">{id}</p>

    <button id="playButton" type="button" className="flex w-8 h-8 mr-2" onClick={() => insertVideo(music)}>
        <img className="inline-block w-8 h-8 playVideoWidth" src={playIcon} alt="playIcon"/>
        {/* <img className="inline-block w-8 h" src={disLikeIcon} alt="disLikeIcon"/> */}
    </button>

  </div>
    )

};

export default ListItem;