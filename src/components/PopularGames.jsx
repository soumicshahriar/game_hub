import React from "react";
import GameCard from "./GameCard";

const PopularGames = ({ games }) => {
  // Sort games by ratings (highest first)
  const popularGames = [...games]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 3);

  return (
    <div className="my-10 px-4 space-y-10">
      {/* Popular Games Section */}
      <section>
        <h2 className="text-3xl font-bold  mb-4 text-center">
          🎯 Popular <span className="text-[#ffd166]">Games</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/*  All Games Section */}
      <section>
        <h2 className="text-3xl font-bold  mb-4 text-center">
          🎮 All <span className="text-[#ffd166]">Games</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularGames;
