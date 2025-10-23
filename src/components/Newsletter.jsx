import { motion } from "motion/react";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import MotionLoader from "../sharedPages/MotionLoader";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Newsletter = () => {
  const { user } = useContext(AuthContext);
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch game data from public/game.json
  useEffect(() => {
    fetch("/game.json")
      .then((res) => res.json())
      .then((data) => {
        setGame(data[0]);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading game data:", err));
  }, []);

  if (loading) return <MotionLoader></MotionLoader>;

  if (!game) return null;

  return (
    <motion.div
      className=" mx-auto bg-linear-to-b from-[#004953] to-[#012f36] text-white rounded-2xl overflow-hidden shadow-2xl my-10 border border-[#066068]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div
        className="bg-[#076d7b] px-8 py-6 text-center border-b border-[#0e4e58]"
        variants={fadeUp}
      >
        <h1 className="text-3xl font-bold tracking-wide text-[#FFD166]">
          {game.title}
        </h1>
        <p className="text-sm text-gray-300 mt-2 uppercase tracking-widest">
          {game.category} • {game.ratings}★ Rated
        </p>
      </motion.div>

      {/* Cover Image */}
      <motion.div variants={fadeUp}>
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-64 object-cover"
        />
      </motion.div>

      {/* Main Content */}
      <motion.div className="px-8 py-8 space-y-5" variants={fadeUp}>
        <h2 className="text-2xl font-semibold text-[#FFD166]">
          Built for your mind.
        </h2>
        <p className="text-gray-200 text-sm leading-relaxed">
          {game.description}
        </p>

        <motion.a
          href={game.downloadLink}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#FFD166] text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-[#ffcc33] transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Play Now
        </motion.a>
      </motion.div>

      {/* Developer Section */}
      <motion.div
        className="bg-[#013c43] px-8 py-6 flex flex-col items-center text-center space-y-3 border-t border-[#066068]"
        variants={fadeUp}
      >
        <img
          src={game.coverPhoto}
          alt="Developer Avatar"
          className="w-20 h-20 rounded-full border-2 border-[#FFD166] shadow-md"
        />
        <h3 className="text-lg font-semibold text-white">{game.developer}</h3>
        <p className="text-sm text-gray-300 max-w-sm">
          Building experiences that echo beyond time.
        </p>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="bg-[#00363e] px-6 py-4 text-center text-gray-400 text-xs border-t border-[#0e4e58]"
        variants={fadeUp}
      >
        <p>© 2025 {game.title}. All rights reserved.</p>
        {user && (
          <p className="text-[11px] text-gray-500 mt-1">
            Sent to: {user.email}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Newsletter;
