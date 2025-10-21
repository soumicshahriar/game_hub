import React from "react";
import GameCard from "./GameCard";
import { useLoaderData } from "react-router";

const Games = () => {
  const games = useLoaderData();

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold  mb-4 text-center">
        🎮 All <span className="text-[#ffd166]">Games</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Games;
