// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-yellow-400 p-4 min-h-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-white font-semibold text-lg">Lula</div>
        </div>
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
