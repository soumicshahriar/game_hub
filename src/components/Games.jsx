import GameCard from "./GameCard";
import { useLoaderData } from "react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { cardVariants, containerVariants } from "../motion/gamesMotion";
import useTitle from "../utils/useTitle";

const Games = () => {
  useTitle("Games");
  const games = useLoaderData();
  const [search, setSearch] = useState("");

  // Filter logic (case-insensitive)
  const filteredGames = games.filter((g) =>
    g.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-20 min-h-screen">
      <h2 className="text-xl lg:text-3xl font-bold mb-8 text-center">
        🎮 All <span className="text-[#ffd166]">Games</span>
      </h2>

      {/* Search Box */}
      <div className="flex justify-center mb-8 px-4">
        <input
          type="text"
          placeholder="Search games by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#ffd166]"
        />
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 lg:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <motion.div
              key={game.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              <GameCard game={game} />
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400 text-lg">
            ❌ No games found
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default Games;
