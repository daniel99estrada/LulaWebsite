import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="mx-6 my-3">
            <a href="#contact" className="footer-link">Contact Us</a>
          </div>
          <div className="mx-6 my-3">
            <a href="#faq" className="footer-link">FAQ</a>
          </div>
          <div className="mx-6 my-3">
            <a href="#about" className="footer-link">About Us</a>
          </div>
          <div className="mx-6 my-3">
            <a href="#home" className="footer-link">Home</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
