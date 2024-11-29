import React from "react";
import Header from "./Header";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://preview.colorlib.com/theme/hepta/images/hero_1.jpg.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Header />

      <div className="relative text-center text-white px-6 sm:px-12">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Travel & Tours
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
          A free template by{" "}
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Colorlib
          </a>
          . Download and share!
        </p>
        <div className="mt-6 sm:mt-8">
          <button className="bg-transparent border border-white text-white py-2 px-6 sm:py-3 sm:px-8 rounded-md font-semibold hover:bg-white hover:text-black transition-all">
            VISIT COLORLIB
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
