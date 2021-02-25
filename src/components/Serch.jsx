import React from "react";

const Serch = () => (
  <section className="flex flex-col justify-center items-center h-auto w-full pt-16 mb-8 md:px-24 xl:px-60 md:flex md:flex-row md:items-center md:justify-between">
    <p className="text-sm mb-1 text-white">Qué querés escuchar?</p>
    <input
      type="text"
      placeholder="Buscar..."
      className="w-3/4 bg-gray-100 focus:outline-none border-gray-700 border-2 pl-4 rounded-full m-1/2"
    />
  </section>
);

export default Serch;
