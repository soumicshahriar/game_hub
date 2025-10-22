import GameCard from "./GameCard";
import { useLoaderData } from "react-router";
import { motion } from "motion/react";
import { cardVariants, containerVariants } from "../motion/gamesMotion";
import useTitle from "../utils/useTitle";

const Games = () => {
  useTitle("Games");
  const games = useLoaderData();

  return (
    <div className="mt-20 min-h-screen">
      <h2 className="text-xl lg:text-3xl font-bold mb-8 text-center">
        🎮 All <span className="text-[#ffd166]">Games</span>
      </h2>

      {/* Smooth staggered animation for all cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 lg:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {games.map((game) => (
          <motion.div
            key={game.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <GameCard game={game} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Games;
