import React from "react";

const About = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <img
                        src="https://preview.colorlib.com/theme/hepta/images/img_1_long.jpg"
                        alt="About us"
                        className="shadow-lg"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="ml-20 text-4xl font-bold mb-4">Welcome To Our Website</h2>
                    <p className="ml-20 text-gray-600 mb-6 text-lg">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    </p>
                    <p className="ml-20 text-gray-600 mb-6 text-lg">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                    <a
                        href="https://vimeo.com/channels/staffpicks/93951774"
                        className="ml-20 flex items-center text-teal-600"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="flex items-center mr-3">
                            <div className="border-2 border-gray-300 rounded-full p-2 flex justify-center items-center">
                                <span className="fa fa-play m-2"></span>
                            </div>
                        </span>
                        <span className="font-bold text-xl">WATCH THE VIDEO</span>
                    </a>


                </div>
            </div>
        </section>
    );
};

export default About;
