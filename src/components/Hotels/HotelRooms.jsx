import React from "react";

const HotelRooms = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <img
                        src="https://preview.colorlib.com/theme/hepta/images/slider-1.jpg"
                        alt="Family Room"
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 md:ml-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
                        Family Room
                    </h2>
                    <p className="text-gray-600 mb-6 text-base sm:text-lg">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    </p>
                    <p className="text-gray-600 mb-6 text-base sm:text-lg">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HotelRooms;
