import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FFDF2B] flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 flex flex-col justify-center p-16">
        <h1 className="font-ArchivoBlack text-5xl font-bold text-black uppercase mb-4">Get Started</h1>
        <p className="font-ArchivoBlack text-xl text-black">
          We make it easy for you to get started with Level Up Learning Academy
        </p>
      </div>
      <div className="w-full md:w-3/5 flex flex-col justify-center items-center p-8">
        <div className="w-full md:w-3/4 bg-black border-8 border-[#FF652D] p-16 text-left">
          <h2 className="text-white font-bold uppercase text-4xl mb-4">Contact Us</h2>
          <p className="text-white mb-8">
            We'll be happy to answer any questions you have about our services.
          </p>
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 mb-4 border-2 border-[#FF652D] rounded"
            />
            <div className="flex mb-4 space-x-4">
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="p-4 border-2 border-[#FF652D] rounded w-1/2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-4 border-2 border-[#FF652D] rounded w-1/2"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="p-4 mb-4 border-2 border-[#FF652D] rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-[#8B97FD] text-white font-ArchivoBlack uppercase font-bold py-2 px-4 rounded"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
