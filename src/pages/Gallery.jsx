import React from 'react';
import Footer from '../components/Footer';

const Gallery = () => {
  const images = [
    "https://preview.colorlib.com/theme/hepta/images/img_1.jpg",
    "https://preview.colorlib.com/theme/hepta/images/img_2.jpg",
    "https://preview.colorlib.com/theme/hepta/images/img_3.jpg",
    "https://preview.colorlib.com/theme/hepta/images/img_4.jpg",
    "https://preview.colorlib.com/theme/hepta/images/img_3.jpg",
    "https://preview.colorlib.com/theme/hepta/images/img_5.jpg",
    "https://preview.colorlib.com/theme/hepta/images/img_2.jpg",
    "https://preview.colorlib.com/theme/hepta/images/img_4.jpg",
    "https://preview.colorlib.com/theme/hepta/images/img_1.jpg",
  ];

  return (
    <div className="w-full">

      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/slider-2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-6xl font-bold">Gallery</h1>
          <p className="text-lg mt-4">Explore our beautiful property and moments captured</p>
        </div>
      </div>

      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;