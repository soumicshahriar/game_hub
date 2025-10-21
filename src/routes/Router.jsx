import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import GameDetails from "../components/GameDetails";
import Games from "../components/Games";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/all-games",
        Component: Games,
        loader: () => fetch("/game.json"),
      },
      {
        path: "/game/:id",
        element: <GameDetails></GameDetails>,
      },
    ],
  },
]);
