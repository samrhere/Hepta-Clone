import React from "react";
import Footer from "../components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: "https://preview.colorlib.com/theme/hepta/images/img_1.jpg",
      date: "November 24, 2024",
      title: "The Ultimate Guide to Your Next Vacation",
      description: "Discover tips and tricks to make your vacation unforgettable. From planning to packing, we cover it all.",
    },
    {
      id: 2,
      image: "https://preview.colorlib.com/theme/hepta/images/img_2.jpg",
      date: "November 23, 2024",
      title: "Top Destinations for 2024",
      description: "Explore the most breathtaking destinations around the world that you must visit this year.",
    },
    {
      id: 3,
      image: "https://preview.colorlib.com/theme/hepta/images/img_1.jpg",
      date: "November 22, 2024",
      title: "How to Travel on a Budget",
      description: "Learn how to plan an amazing trip without breaking the bank. Save money and travel smarter!",
    },
    {
      id: 4,
      image: "https://preview.colorlib.com/theme/hepta/images/img_2.jpg",
      date: "November 21, 2024",
      title: "Tips for Stress-Free Travel",
      description: "Discover how to make traveling a smooth and enjoyable experience with our proven tips.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[70vh]" style={{ backgroundImage: "url('https://preview.colorlib.com/theme/hepta/images/hero_3.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold">Our Blog</h1>
          <p className="mt-4 text-lg">Stay updated with the latest travel tips and inspiration</p>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500">{post.date}</p>
                <h3 className="text-2xl font-semibold mt-2 mb-4 hover:text-indigo-600 transition">{post.title}</h3>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
