import React from "react";

const destinations = [
  {
    id: 1,
    image: "https://preview.colorlib.com/theme/hepta/images/img_1.jpg",
    title: "Food & Wines",
    reviews: "3,239 reviews",
    rating: 4.5,
  },
  {
    id: 2,
    image: "https://preview.colorlib.com/theme/hepta/images/img_2.jpg",
    title: "Resort & Spa",
    reviews: "4,921 reviews",
    rating: 4.7,
  },
  {
    id: 3,
    image: "https://preview.colorlib.com/theme/hepta/images/img_3.jpg",
    title: "Hotel Rooms",
    reviews: "2,112 reviews",
    rating: 4.3,
  },
  {
    id: 4,
    image: "https://preview.colorlib.com/theme/hepta/images/img_4.jpg",
    title: "Mountain Climbing",
    reviews: "6,421 reviews",
    rating: 4.8,
  },
];

const TopDestination = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
      
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Top Destination
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
          iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
          laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam
          alias. Sed.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white shadow-sm  overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {destination.title}
                </h3>
                <div className="flex items-center justify-center mb-2">
              
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < Math.round(destination.rating)
                          ? "text-teal-500 fas fa-star"
                          : "text-gray-300 far fa-star"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-400 text-sm">{destination.reviews}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestination;
