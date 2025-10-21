import GameCard from "./GameCard";
import { useLoaderData } from "react-router";

const Recommended = () => {
  const games = useLoaderData();

  const recommendedGames = [...games]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(3, 15);

  return (
    <section className="my-15 px-4">
      <h2 className="text-xl lg:text-3xl font-bold  mb-4 text-center">
        🌟 Recommended <span className="text-[#ffd166]">Games</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recommendedGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
};

export default Recommended;
