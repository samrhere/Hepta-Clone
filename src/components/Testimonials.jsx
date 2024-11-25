import React from "react";

const testimonials = [
  {
    id: 1,
    avatar: "https://preview.colorlib.com/theme/hepta/images/person_1.jpg",
    name: "Clare Gupta",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    id: 2,
    avatar: "https://preview.colorlib.com/theme/hepta/images/person_2.jpg",
    name: "Rogie Slater",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    id: 3,
    avatar: "https://preview.colorlib.com/theme/hepta/images/person_3.jpg",
    name: "John Doe",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-black mb-8">Happy Customers</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center text-center"
            >
              <img
                className="w-20 h-20 rounded-full mb-6"
                src={testimonial.avatar}
                alt={testimonial.name}
              />
              <p className="text-gray-600 italic mb-4">
                “{testimonial.quote}”
              </p>
              <p className="font-semibold text-gray-700">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;