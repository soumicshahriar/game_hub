import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch("/game.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((g) => g.id === id);
        setGame(found);
      });
  }, [id]);

  if (!game)
    return <p className="text-center mt-20">Loading game details...</p>;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-[#004953] text-white rounded-lg shadow-lg">
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
      <p className="text-gray-200 mb-4">{game.description}</p>
      <p>
        <strong>Category:</strong> {game.category}
      </p>
      <p>
        <strong>Developer:</strong> {game.developer}
      </p>
      <p className="text-yellow-400 my-2">⭐ Ratings: {game.ratings}</p>
      <a
        href={game.downloadLink}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-[#075b66] mt-6 px-6 py-2 rounded-md hover:bg-[#087d8c] transition"
      >
        Install Game
      </a>
    </div>
  );
};

export default GameDetails;
