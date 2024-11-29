import React from "react";

const blogPosts = [
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/hepta/images/img_1.jpg",
        description: "Five Reasons to Stay at Villa Resort",
    },
    {
        id: 2,
        image: "https://preview.colorlib.com/theme/hepta/images/img_2.jpg",
        description: "Five Reasons to Stay at Villa Resort",
    },
    {
        id: 3,
        image: "https://preview.colorlib.com/theme/hepta/images/img_3.jpg",
        description: "Five Reasons to Stay at Villa Resort",
    },
];

const HotelFeatures = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                    More Hotel Features
                </h1>
                <p className="text-gray-500 text-base sm:text-lg mb-12 mx-auto max-w-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio
                    repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis
                    laboriosam alias. Sed.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={post.image}
                                alt={post.description}
                                className="w-full h-56 sm:h-64 lg:h-80 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">{post.description}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotelFeatures;
