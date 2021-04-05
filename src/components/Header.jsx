import React from "react";
import logo from '../assets/static/logomdr.png'

const Header = () => (
  <header className="fixed flex justify-center lg:justify-start bg-black lg:bg-transparent h-auto w-full pt-6 pb-2 lg:pl-8 lg:pt-8 lg:pb-0 text-white font-semibold uppercase z-50">
    <img src={logo}  className="w-60" alt="mostras del rock"/>
    <h1 className="text-base hidden">Mostras del rock</h1>
    {/* <button className="text-base">...</button> */}
  </header>
);

export default Header;
