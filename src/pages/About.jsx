import React from 'react';
import Intro from '../components/About/Intro';
import HotelGallery from '../components/About/HotelGallery';
import Team from '../components/About/Team';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="w-full">
    
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/slider-2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-6xl font-bold">About Us</h1>
          <p className="text-lg mt-4">Discover our story and what makes us unique</p>
        </div>
      </div>

      <Intro />
      <HotelGallery />
      <Team />
      <Footer />
     
    </div>
  );
};

export default About;
