import React from "react";

const blogPosts = [
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/hepta/images/img_1.jpg",
        description: "Five Reasons to Stay at Villa Resort"
    },
    {
        id: 2,
        image: "https://preview.colorlib.com/theme/hepta/images/img_2.jpg",
        description: "Five Reasons to Stay at Villa Resort"
    },
    {
        id: 3,
        image: "https://preview.colorlib.com/theme/hepta/images/img_3.jpg",
        description:
            "Five Reasons to Stay at Villa Resort"
    },
];

const HotelFeatures = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                {/* Section Header */}
                <h1 className="text-5xl font-bold text-black mb-6">More Hotel Features</h1>
                <p className="text-gray-500 text-lg mb-12 mr-20 ml-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
                </p>

                {/* Blog Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                    {post.description}
                                </h3>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotelFeatures;
