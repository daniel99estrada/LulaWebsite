// src/components/Hero.js
import React from 'react';
import graphics1 from '../Assets/graphics1.png'; // Importing graphics1 image

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFFFF7] text-center">
      <h1 className="text-[42px] font-Bukhari text-[#8B97FD] mb-2 font-bold italic">
        Welcome to
      </h1>
      <h2 className="text-[72px] font-ArchivoBlack text-black">
        LEVEL UP LEARNING ACADEMY
      </h2>
      <img src={graphics1} alt="Graphics 1" className="mt-4" />
    </div>
  );
};

export default Hero;
