import React from 'react';
import Services from '../components/Services';
import HotelGallery from '../components/About/HotelGallery';
import HotelFeatures from '../components/Hotels/HotelFeatures';
import Footer from '../components/Footer';
import HotelRooms from '../components/Hotels/HotelRooms';

const Hotels = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/slider-4.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-6xl font-bold">Our Hotels</h1>
                    <p className="text-lg mt-4">Luxury you deserve, comfort you'll love</p>
                </div>
            </div>

            <Services />
            <HotelRooms />
            <HotelGallery />
            <HotelFeatures />
            <Footer />

        </div>
    );
};

export default Hotels;
