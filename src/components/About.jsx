import React from "react";

const About = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img
            src="https://preview.colorlib.com/theme/hepta/images/img_1_long.jpg"
            alt="About us"
            className="w-full shadow-lg"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Welcome To Our Website
          </h2>
          <p className="text-gray-600 mb-4 text-base sm:text-lg">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <a
            href="https://vimeo.com/channels/staffpicks/93951774"
            className="flex items-center justify-center md:justify-start text-teal-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center mr-3">
              <div className="border-2 border-gray-300 rounded-full p-2 flex justify-center items-center">
                <i className="fa fa-play text-lg"></i>
              </div>
            </div>
            <span className="font-bold text-lg sm:text-xl">WATCH THE VIDEO</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
