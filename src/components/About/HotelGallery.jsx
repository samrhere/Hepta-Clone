import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tourImages = [
  {
    id: 1,
    src: "https://preview.colorlib.com/theme/hepta/images/slider-1.jpg",
    alt: "Expert Planning",
  },
  {
    id: 2,
    src: "https://preview.colorlib.com/theme/hepta/images/slider-2.jpg",
    alt: "Affordable Pricing",
  },
  {
    id: 3,
    src: "https://preview.colorlib.com/theme/hepta/images/slider-3.jpg",
    alt: "24/7 Support",
  },
  {
    id: 4,
    src: "https://preview.colorlib.com/theme/hepta/images/slider-4.jpg",
    alt: "24/7 Support",
  },
  {
    id: 5,
    src: "https://preview.colorlib.com/theme/hepta/images/slider-5.jpg",
    alt: "24/7 Support",
  },
];

const HotelGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Medium screens (tablets)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Small screens (mobiles)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
          Hotel Gallery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {tourImages.map((image) => (
              <div key={image.id} className="px-2">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-60 sm:h-72 md:h-96 lg:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HotelGallery;
