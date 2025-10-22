import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import GameDetails from "../components/GameDetails";
import Games from "../components/Games";
import Recommended from "../components/Recommended";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import NotFound from "../components/NotFound";
import MyProfile from "../components/MyProfile";
import UpdateInfo from "../components/UpdateInfo";
import ForgetPassword from "../components/ForgetPassword";

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
        element: (
          <PrivateRoute>
            <GameDetails></GameDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/recommended-games",
        Component: Recommended,
        loader: () => fetch("/game.json"),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/my-profile",
        Component: MyProfile,
      },
      {
        path: "/update-info",
        Component: UpdateInfo,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
