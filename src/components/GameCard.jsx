import React from "react";
import { useNavigate } from "react-router";

const GameCard = ({ game }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/game/${game.id}`)}
      className="bg-[#004953] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition transform hover:-translate-y-2"
    >
      {/* Cover Image */}
      <div className="relative">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/60 text-yellow-400 px-2 py-1 text-sm rounded-md">
          ⭐ {game.ratings}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate">{game.title}</h3>
        <p className="text-sm text-gray-300">{game.developer}</p>
        <p className="text-xs text-gray-400 mt-2 italic">
          {game.category} Game
        </p>

        {/* Download Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent navigating to details
            window.open(game.downloadLink, "_blank");
          }}
          className="mt-4 bg-[#075b66] hover:bg-[#087d8c] text-white px-4 py-2 rounded-md text-sm font-semibold"
        >
          Install
        </button>
      </div>
    </div>
  );
};

export default GameCard;
