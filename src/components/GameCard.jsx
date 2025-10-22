import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cardVariants, transition } from "../motion/cardClickMotion";

const GameCard = ({ game }) => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const { id, coverPhoto, title, ratings, developer, category, downloadLink } =
    game;

  const handleClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate(`/game/${id}`);
    }, 200);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          onClick={handleClick}
          className="bg-[#004953] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition transform hover:-translate-y-2"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          whileTap="click"
          exit={{ opacity: 0, scale: 0.9 }}
          transition={transition}
        >
          {/* Cover Image */}
          <div className="relative">
            <img
              src={coverPhoto}
              alt={title}
              className="h-48 w-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 text-sm rounded-md hover:scale-110 transition-all ease-in-out duration-500">
              ⭐ {ratings}
            </div>
          </div>

          {/* Info Section */}
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1 truncate">{title}</h3>
            <p className="text-sm text-gray-300">{developer}</p>
            <p className="text-xs text-gray-400 mt-2 italic">{category} Game</p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(downloadLink, "_blank");
              }}
              className="mt-4 bg-[#075b66] hover:bg-[#087d8c] text-white px-4 py-2 rounded-md text-sm font-semibold"
            >
              Install
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GameCard;
