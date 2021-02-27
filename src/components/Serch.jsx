import React from "react";
import serchIcon from "../assets/static/serchIcon.png";
const Serch = () => (
  <section className="flex justify-center items-center h-auto w-full pt-20 mb-8 lg:px-24 xl:px-60 lg:flex lg:flex-row lg:items-center lg:justify-between">
    <div className="w-3/4 flex justify-center items-center ">
      <input
        type="text"
        placeholder="Buscar..."
        className=" w-5/6 h-8 text-md bg-black focus:outline-none myBorder text-white border-2 pl-4 rounded-l-full "
      />
      <i className="flex justify-center w-1/6 h-8 bg-black focus:outline-none myBorder  text-white border-2 border-l-0 rounded-r-full ">
        <img src={serchIcon} className="self-center w-4" alt="lupa" />
      </i>
    </div>
  </section>
);

export default Serch;
