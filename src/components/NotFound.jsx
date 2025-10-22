import { motion } from "motion/react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-[#001f25] to-[#003c47] text-white">
      {/* Animated glowing background */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 0.9, 1.2],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating 404 Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 drop-shadow-lg"
      >
        404
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-xl text-white/80 mb-8 text-center"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      {/* Back Home Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full font-semibold hover:opacity-90 shadow-lg transition"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Subtle floating animation for the whole content */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex flex-col items-center justify-center -z-10"
      />
    </div>
  );
};

export default NotFound;
