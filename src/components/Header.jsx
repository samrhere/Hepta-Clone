import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-white text-2xl font-bold">Hepta</h1>

        <div
          className="text-white text-3xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <i className="fas fa-bars"></i>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-40">
          <div
            className="absolute top-4 right-6 text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </div>
          <ul className="text-center">
            <li className="text-3xl font-semibold py-2">
              <Link to="/" className="hover:text-gray-500" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="text-3xl font-semibold py-2">
              <Link to="/hotels" className="hover:text-gray-500" onClick={() => setMenuOpen(false)}>
                Hotels
              </Link>
            </li>
            <li className="text-3xl font-semibold py-2">
              <Link to="/about" className="hover:text-gray-500" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="text-3xl font-semibold py-2">
              <Link to="/gallery" className="hover:text-gray-500" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>
            </li>
            <li className="text-3xl font-semibold py-2">
              <Link to="/news" className="hover:text-gray-500" onClick={() => setMenuOpen(false)}>
                News
              </Link>
            </li>
            <li className="text-3xl font-semibold py-2 text-teal-500">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
