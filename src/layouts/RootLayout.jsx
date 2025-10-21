import React from "react";
import { Outlet } from "react-router";
import Navbar from "../sharedPages/Navbar";
import { div } from "motion/react-client";

const RootLayout = () => {
  return (
    <div className="bg-[#004953] min-h-screen">
      <div className="max-w-11/12 mx-auto -space-y-10 text-white">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default RootLayout;
