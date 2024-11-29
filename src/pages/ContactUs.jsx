import React from "react";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="w-full">
      <div
        className="relative bg-cover bg-center h-[70vh] sm:h-[60vh] lg:h-[70vh]"
        style={{
          backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/slider-3.jpg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="flex flex-col items-center justify-center h-full  text-center px-4 sm:px-8">
          <h1 className="text-4xl text-white sm:text-5xl font-bold">Contact</h1>
          <p className="mt-4 text-white text-lg sm:text-xl">We’re here to help. Get in touch with us today!</p>
        </div>
      </div>

      <div className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         
          <div>
            <h2 className="text-4xl font-bold mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Your Email Address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have a question or need assistance? Reach out to us, and we’ll get back to you as soon as possible.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-teal-600 text-2xl mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div>
                  <h4 className="text-lg font-semibold">Address:</h4>
                  <p className="text-gray-600">123 Street, City, Country</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 text-2xl mr-4">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <div>
                  <h4 className="text-lg font-semibold">Phone:</h4>
                  <p className="text-gray-600">+123 456 7890</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 text-2xl mr-4">
                  <i className="fas fa-envelope"></i>
                </span>
                <div>
                  <h4 className="text-lg font-semibold">Email:</h4>
                  <p className="text-gray-600">info@hepta.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Contact;
