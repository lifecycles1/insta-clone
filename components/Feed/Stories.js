import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [
      {
        id: 1,
        avatar: "https://i.imgur.com/l0bjcRa.jpg",
        username: "Sonny.Sangha",
      },
      {
        id: 2,
        avatar: "https://i.imgur.com/h50CtIV.jpg",
        username: "Harry.Potter",
      },
      {
        id: 3,
        avatar: "https://i.imgur.com/tkOqX9M.jpg",
        username: "Elon.Musk",
      },
      {
        id: 4,
        avatar: "https://i.imgur.com/g2gZPVd.jpg",
        username: "Sara.Andersen",
      },
      {
        id: 5,
        avatar: "https://i.imgur.com/4gU2bJK.jpg",
        username: "Adina.Barbosa",
      },
      {
        id: 6,
        avatar: "https://i.imgur.com/tiNZmrp.jpg",
        username: "Roberto.Vega",
      },
      {
        id: 7,
        avatar: "https://i.imgur.com/sWNN8hY.jpg",
        username: "Rudi.Droste",
      },
      {
        id: 8,
        avatar: "https://i.imgur.com/FbPNvrw.jpg",
        username: "Carolina.Lima",
      },
      {
        id: 9,
        avatar: "https://i.imgur.com/NQwUor5.jpg",
        username: "Kent.Brewer",
      },
      {
        id: 10,
        avatar: "https://i.imgur.com/PIVCQjo.jpg",
        username: "Evan.Carlson",
      },
      {
        id: 11,
        avatar: "https://i.imgur.com/QpfOXQ5.jpg",
        username: "Friedrich-Karl.Brand",
      },
      {
        id: 12,
        avatar: "https://i.imgur.com/NHa9wCF.jpg",
        username: "Edita.Vestering",
      },
      {
        id: 13,
        avatar: "https://i.imgur.com/71JzSXP.jpg",
        username: "Mads.Andersen",
      },
      {
        id: 14,
        avatar: "https://i.imgur.com/NrfNnCA.jpg",
        username: "Mark.Zuckerberg",
      },
      {
        id: 15,
        avatar: "https://i.imgur.com/Hk3qWtk.jpg",
        username: "Jeff Bezoz",
      },
      {
        id: 16,
        avatar: "https://i.imgur.com/bAMyKHw.jpg",
        username: "Jolanda.Lacroix",
      },
      {
        id: 17,
        avatar: "https://i.imgur.com/h92G1jb.jpg",
        username: "Margarita.Vicente",
      },
      {
        id: 18,
        avatar: "https://i.imgur.com/h4ZoYdg.jpg",
        username: "Kayla.Bredesen",
      },
      {
        id: 19,
        avatar: "https://i.imgur.com/rLeene9.jpg",
        username: "Sibylle.Leibold",
      },
    ];

    setSuggestions(suggestions);
  }, []);
  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border 
    rounded-sm overflow-x-scroll scrollbar-thumb-black scrollbar-thin"
    >
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
