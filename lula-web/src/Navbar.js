import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Company Name */}
          <div className="text-white font-semibold text-lg">Lula</div>
        </div>
        {/* Hamburger Menu */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
