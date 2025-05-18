import React from 'react';
import Headerbg from '../assets/images/more/15.jpg';
import Logo from '../assets/images/more/logo1.png';



const Header = () => {
  return (
    <header
      className="bg-center bg-cover bg-no-repeat text-white py-4"
      style={{
        backgroundImage: `url(${Headerbg})`,
      }}
    >
      <div className='flex items-center justify-center gap-4'>
        <img className='w-[75px]' src={Logo} alt="logo" />
        <h1 className='text-6xl'>Espresso Emporium</h1>
      </div>
    </header>
  );
};

export default Header;