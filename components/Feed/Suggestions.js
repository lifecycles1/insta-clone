import { useEffect, useState } from "react";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [
      {
        id: 1,
        avatar: "https://i.imgur.com/FbPNvrw.jpg",
        username: "Carolina.Lima",
        company: {
          name: "Homenick Inc",
          address: "",
        },
      },
      {
        id: 2,
        avatar: "https://i.imgur.com/NHa9wCF.jpg",
        username: "Edita.Vestering",
        company: {
          name: "Sauer Inc",
          address: "",
        },
      },
      {
        id: 3,
        avatar: "https://i.imgur.com/bAMyKHw.jpg",
        username: "Jolanda.Lacroix",
        company: {
          name: "Cronin - Cruickshank",
          address: "",
        },
      },
      {
        id: 4,
        avatar: "https://i.imgur.com/NQwUor5.jpg",
        username: "Kent.Brewer",
        company: {
          name: "Windler, Barton and Johnson",
          address: "",
        },
      },
      {
        id: 5,
        avatar: "https://i.imgur.com/PIVCQjo.jpg",
        username: "Evan.Carlson",
        company: {
          name: "Murphy, McKenzie and Schroeder",
          address: "",
        },
      },
    ];
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src={profile.avatar}
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>
          <button className="text-xs font-semibold text-blue-400">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
