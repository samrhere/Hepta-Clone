import React from "react";

const services = [
  {
    id: 1,
    icon: "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/001-breakfast.svg",
    title: "Good Foods",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 2,
    icon: "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/002-planet-earth.svg",
    title: "Travel Anywhere",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 3,
    icon: "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/003-airplane.svg",
    title: "Airplane",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 4,
    icon: "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/004-beach.svg",
    title: "Beach Resort",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 5,
    icon: "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/005-mountains.svg",
    title: "Mountain Climbing",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 6,
    icon: "https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/006-hot-air-balloon.svg",
    title: "Hot Air Balloon",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">
          Experience Once In Your Life Time
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-transparent hover:shadow-xl transition-shadow"
            >
              <img
                className="w-16 h-16 mx-auto mb-4 transform hover:scale-110 transition-transform"
                src={service.icon}
                alt={service.title}
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-3 hover:text-teal-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
