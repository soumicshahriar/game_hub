import GameCard from "./GameCard";
import { useLoaderData } from "react-router";
import { motion } from "motion/react";
import { cardVariants, containerVariants } from "../motion/gamesMotion";
import useTitle from "../utils/useTitle";

const Recommended = () => {
  useTitle("Recommended Games");
  const games = useLoaderData();

  const recommendedGames = [...games]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(3, 15);

  return (
    <section className="mt-15 px-4">
      <h2 className="text-xl lg:text-3xl font-bold  mb-4 text-center">
        🌟 Recommended <span className="text-[#ffd166]">Games</span>
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {recommendedGames.map((game) => (
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
    </section>
  );
};

export default Recommended;
