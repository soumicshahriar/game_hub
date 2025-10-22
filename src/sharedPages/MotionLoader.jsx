import { motion } from "motion/react";

const MotionLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#001f25] to-[#003c47] relative overflow-hidden">
      {/* Animated glowing circles in the background */}
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

      {/* Loader animation */}
      <motion.div
        className="relative w-24 h-24 border-4 border-t-transparent border-teal-300 rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glow text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-10 text-white text-2xl font-bold tracking-wider"
      >
        Loading...
      </motion.h2>
    </div>
  );
};

export default MotionLoader;
