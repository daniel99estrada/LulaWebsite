import React from 'react';
import logo from './Assets/logo.png'; // Import logo image

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-16 mr-4" />
          {/* Company Name */}
          <div className="text-white font-semibold text-lg">Lula</div>
        </div>
        {/* Nav Links */}
        <div className="hidden md:flex">
          <a href="#contact" className="text-white hover:text-gray-300 px-3 py-2">Contact</a>
          <a href="#services" className="text-white hover:text-gray-300 px-3 py-2">Services</a>
          <a href="#about" className="text-white hover:text-gray-300 px-3 py-2">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
