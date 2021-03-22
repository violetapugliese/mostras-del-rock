import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import serchIcon from "../assets/static/serchIcon.png";

const API = "https://violetapugliese.github.io/mdrAPIRest/db.json";

const Serch = () => {
const [mostra, setMostra] = useState({ mdr: [] });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setMostra(data));
    return mostra;
  }, []);

  // console.log(mostra);


  return (
    // <section className="flex justify-center items-center h-auto w-full pt-20 mb-8 lg:px-24 xl:px-60 lg:flex lg:flex-row lg:items-center lg:justify-between">
      <div className=" w-5/6 flex justify-center items-center mb-8 ">
        <select
          name=""
          className="select w-5/6 h-8 text-md bg-black focus:outline-none myBorder text-white border-2 pl-4 pr-4 rounded-l-full "
          id=""
          onChange={() => alert("Work in progress")}
        >
          <option value="0"></option>
           {mostra.mdr.map((item) => (
             <option key={item.id} value={item.id} {...item}>{item.name}</option>
           ))}
        </select>

        {/* <input
        type="text"
        placeholder="Buscar..."
        className=" w-5/6 h-8 text-md bg-black focus:outline-none myBorder text-white border-2 pl-4 rounded-l-full "
      /> */}

        <i className="flex justify-center w-1/6 h-8 bg-black focus:outline-none myBorder  text-white border-2 border-l-0 rounded-r-full ">
          <img src={serchIcon} className="self-center w-4" alt="lupa" />
        </i>
      </div>
    // </section>
  );
};

export default Serch;
