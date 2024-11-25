import React from 'react';
import Header from './Header';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/hero_1.jpg.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div> 
      <Header />
      <div className="relative text-center text-white px-6 md:px-12">
        <h1 className="text-6xl md:text-6xl font-bold leading-tight">
          Travel & Tours
        </h1>
        <p className="mt-6 text-xl md:text-xl max-w-2xl mx-auto">
        A free template by <a className='underline'>Colorlib.</a> Download and share!
        </p>
        <div className="mt-8">
          <button className="ml-4 bg-transparent border border-white text-white py-3 px-8 rounded-md font-semibold hover:bg-white hover:text-black transition-all ">
            VISIT COLORLIB
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
