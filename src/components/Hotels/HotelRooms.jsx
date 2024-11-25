import React from "react";

const HotelRooms = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <img
                        src="https://preview.colorlib.com/theme/hepta/images/slider-1.jpg"
                        alt="About us"
                        className="shadow-lg"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="ml-20 text-4xl font-bold mb-4">Family Room
                    </h2>
                    <p className="ml-20 text-gray-600 mb-6 text-lg">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    </p>
                    <p className="ml-20 text-gray-600 mb-6 text-lg">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                    


                </div>
            </div>
        </section>
    );
};

export default HotelRooms;
