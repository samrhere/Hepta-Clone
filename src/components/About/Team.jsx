import React from "react";

const TeamMembers = [
    {
        id: 1,
        image: "https://preview.colorlib.com/theme/hepta/images/person_3.jpg",
        rank: "CEO, Co-Founder",
        title: "Vince Richardson",
    },
    {
        id: 2,
        image: "https://preview.colorlib.com/theme/hepta/images/person_1.jpg",
        rank: "CTO, Co-Founder",
        title: "Jean Love",
    },
    {
        id: 3,
        image: "https://preview.colorlib.com/theme/hepta/images/person_2.jpg",
        rank: "Marketer, Co-Founder",
        title: "Jeff Stark",
    },
    {
        id: 4,
        image: "https://preview.colorlib.com/theme/hepta/images/person_3.jpg",
        rank: "CEO, Co-Founder",
        title: "Vince Richardson",
    },
    {
        id: 5,
        image: "https://preview.colorlib.com/theme/hepta/images/person_1.jpg",
        rank: "CTO, Co-Founder",
        title: "Jean Love",
    },
    {
        id: 6,
        image: "https://preview.colorlib.com/theme/hepta/images/person_2.jpg",
        rank: "Marketer, Co-Founder",
        title: "Jeff Stark",
    }
];

const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          Team
        </h1>
        <p className="text-gray-500 text-lg mb-12 mx-auto max-w-3xl">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TeamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-2">{member.rank}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {member.title}
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
