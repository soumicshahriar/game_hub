import GameCard from "./GameCard";
import { useLoaderData } from "react-router";
import { motion } from "motion/react";
import { cardVariants, containerVariants } from "../motion/gamesMotion";
import useTitle from "../utils/useTitle";
import { useState } from "react";

const Recommended = () => {
  useTitle("Recommended Games");
  const games = useLoaderData();

  // sort functionality
  const [sortOrder, setSortOrder] = useState("desc");

  const recommendedGames = [...games]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(3, 15);

  // apply sorting based on dropdown sorting
  const sortedRecommended = [...recommendedGames].sort((a, b) => {
    const ratingA = parseFloat(a.ratings);
    const ratingB = parseFloat(b.ratings);
    return sortOrder === "asc" ? ratingA - ratingB : ratingB - ratingA;
  });

  return (
    <section className="mt-15 px-4">
      <h2 className="text-xl lg:text-3xl font-bold  mb-4 text-center">
        🌟 Recommended <span className="text-[#ffd166]">Games</span>
      </h2>

      {/* Sorting Dropdown */}
      <div className="flex justify-end mb-6">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring focus:ring-[#ffd166]"
        >
          <option value="desc" className="text-black">
            Rating: High → Low
          </option>
          <option value="asc" className="text-black">
            Rating: Low → High
          </option>
        </select>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {sortedRecommended.map((game) => (
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
