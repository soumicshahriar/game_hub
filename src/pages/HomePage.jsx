import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import PopularGames from "../components/PopularGames";
import Newsletter from "../components/Newsletter";

const HomePage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/game.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  console.log(games);

  return (
    <div>
      {games.length > 0 && <Banner games={games} />}
      {games.length > 0 && <PopularGames games={games} />}
      <Newsletter></Newsletter>
    </div>
  );
};

export default HomePage;
