import React from "react";
import Headerbg from "../assets/images/more/15.jpg";
import Logo from "../assets/images/more/logo1.png";

const Header = () => {
  return (
    <header
      className="bg-center w-full bg-cover bg-no-repeat text-white py-4 px-4 md:px-8"
      style={{
        backgroundImage: `url(${Headerbg})`,
      }}
    >
      <div className="flex items-center justify-center gap-4 text-center md:text-left">
        <img className="w-16 md:w-[75px]" src={Logo} alt="logo" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Espresso Emporium
        </h1>
      </div>
    </header>
  );
};

export default Header;
