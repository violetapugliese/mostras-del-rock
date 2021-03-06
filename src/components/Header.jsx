import React from "react";
import logo from '../assets/static/logomdr.png'

const Header = () => (
  <header className="flex justify-center items-center lg:justify-start bg-black h-auto w-full p-4 text-white font-semibold uppercase z-50">
    <img src={logo}  className="w-60" alt="mostras del rock"/>
    <h1 className="text-base hidden">Mostras del rock</h1>
    {/* <button className="text-base">...</button> */}
  </header>
);

export default Header;
