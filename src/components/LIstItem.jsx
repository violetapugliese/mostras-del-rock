import React from "react";

import playIcon from '../assets/static/playIcon.png';

const ListItem = ({id, name}) => {
  var i = id;
  <div className="flex flew-wrap items-center justify-between w-5/6 h-auto bg-white shadow-lg rounded-full m-2 p-1 ">
    <figure className="inline-block w-14 h-14 photoWidth rounded-full bg-gray-800">
      <img src="" alt="" />
    </figure>
    <p className="mx-2 text-center">{`${name}`}</p>
    <button id="playButton" className="flex focus:online-none active:bg-blue-700 w-8 h-8 mr-2" oneClick="">
        <img className="inline-block w-8 h-8 playVideoWidth" src={playIcon} alt="playIcon"/>
    </button>
  </div>
};

export default ListItem;
