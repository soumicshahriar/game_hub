import { Outlet } from "react-router";
import Navbar from "../sharedPages/Navbar";
import ScrollToTop from "../routes/ScrollToTop";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import MotionLoader from "../sharedPages/MotionLoader";
import Footer from "../sharedPages/Footer";

const RootLayout = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return <MotionLoader></MotionLoader>;
  }

  return (
    <>
      <ScrollToTop />
      <div className="bg-[#004953] min-h-screen flex flex-col">
        <Navbar></Navbar>
        <main className="max-w-11/12 mx-auto space-y-10 text-white flex-1 w-full">
          <div>
            <div>
              <Outlet></Outlet>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default RootLayout;
