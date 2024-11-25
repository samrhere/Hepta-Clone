import React from "react";

const TeamMembers = [
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/hepta/images/person_3.jpg",
        rank: "CEO, Co-Founder",
        title: "Vince Richardson",
    },
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/hepta/images/person_1.jpg",
        rank: "CTO, Co-Founder",
        title: "Jean Love",
    },
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/hepta/images/person_2.jpg",
        rank: "Marketer, Co-Founder",
        title: "Jeff Stark",
    },
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/hepta/images/person_3.jpg",
        rank: "CEO, Co-Founder",
        title: "Vince Richardson",
    },
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/hepta/images/person_1.jpg",
        rank: "CTO, Co-Founder",
        title: "Jean Love",
    },
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/hepta/images/person_2.jpg",
        rank: "Marketer, Co-Founder",
        title: "Jeff Stark",
    }
];

const Team = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                {/* Section Header */}
                <h1 className="text-5xl font-bold text-black mb-6">Recent Blog Post</h1>
                <p className="text-white text-lg mb-12 mr-20 ml-20">
                    Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts. Separated they
                    live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.
                </p>

                {/* Blog Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {TeamMembers.map((post) => (
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
                                <p className="text-gray-400 text-sm mb-2">{post.rank}</p>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                    {post.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
