import React from "react";

const blogPosts = [
  {
    id: 1,
    image: "https://preview.colorlib.com/theme/hepta/images/img_1.jpg",
    date: "February 26, 2018",
    title: "45 Best Places To Unwind",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 2,
    image: "https://preview.colorlib.com/theme/hepta/images/img_2.jpg",
    date: "February 26, 2018",
    title: "45 Best Places To Unwind",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    id: 3,
    image: "https://preview.colorlib.com/theme/hepta/images/img_3.jpg",
    date: "February 26, 2018",
    title: "45 Best Places To Unwind",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const RecentBlogPosts = () => {
  return (
    <section className="py-16 bg-teal-500">
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
                <p className="text-gray-400 text-sm mb-2">{post.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;
