import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-10 mt-10">Quick Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Help</a></li>
              <li><a href="#" className="hover:text-white">Rooms</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-10">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Our Location</a></li>
              <li><a href="#" className="hover:text-white">The Hosts</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Restaurant</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-10">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <span className="block text-gray-300">Address:</span>
                98 West 21th Street, Suite 721<br />
                New York NY 10016
              </li>
              <li>
                <span className="block text-gray-300">Phone:</span>
                (+1) 435 3533
              </li>
              <li>
                <span className="block text-gray-300">Email:</span>
                info@yourdomain.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Subscribe</h3>
            <p className="mb-4">Sign up for our newsletter</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email..."
                className="flex-grow p-2 rounded-l-md bg-gray-800 text-gray-400 placeholder-gray-500"
              />
              <button className="bg-transparent text-white px-4 rounded-r-md hover:bg-teal-400">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500">
            Copyright © 2024 All rights reserved | This template is made with{" "}
            <span className="text-gray-500">❤</span> by Colorlib
          </p>
      
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
