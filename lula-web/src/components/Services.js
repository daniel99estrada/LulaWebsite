// src/components/Services.js
import React from 'react';
import graphics1 from '../Assets/graphics2.png'; // Importing graphics1 image

const Services = () => {
  return (
    <div className="m-16 text-center bg-[#FFFFF7]">
      <h1 className="font-ArchivoBlack text-6xl font-bold underline text-black mb-4">What We Teach</h1>
      <p className="font-Muli text-2xl text-black mb-8">Your one-stop shop for academic success!</p>
      <div className="flex justify-center m-8">
        <div className="mx-4 text-center">
          <div className="p-8 w-64 h-32 bg-[#FF652D] rounded flex items-center justify-center">
            <p className="text-black font-ArchivoBlack text-lg uppercase">Highschool Tutoring</p>
          </div>
        </div>
        <div className="mx-4 text-center">
          <div className="p-8 w-64 h-32 bg-[#FFDF2B] rounded flex items-center justify-center">
            <p className="text-black font-ArchivoBlack text-lg uppercase font-bold">Programming for Beginners</p>
          </div>
        </div>
        <div className="mx-4 text-center">
          <div className="p-8 w64 h-32 bg-[#13B818] rounded flex items-center justify-center">
            <p className="text-black font-ArchivoBlack text-lg uppercase font-bold">Advanced Programming Courses</p>
          </div>
        </div>
      </div>
      <img src={graphics1} alt="Graphics 1" className="mx-auto" style={{ maxWidth: '70%' }} />
    </div>
  );
};

export default Services;
