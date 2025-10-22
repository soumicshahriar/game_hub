import { motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen  relative overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <h2 className=" text-xl lg:text-4xl font-extrabold text-center mb-6 text-white drop-shadow">
          Login
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-white/90 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 text-white outline-none placeholder-white/70 text-xs md:text-lg"
            />
          </div>

          <div className="relative">
            <label className="block text-white/90 text-sm mb-1">Password</label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 text-white outline-none placeholder-white/70 text-xs md:text-lg"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-8 text-white/70"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r  from-teal-400 to-cyan-500 py-2 rounded-lg font-semibold text-white shadow-lg hover:opacity-90 transition text-xs md:text-lg"
          >
            Login
          </motion.button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 h-[1px] bg-white/30" />
          <span className="text-white/70 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-white/30" />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 py-2 rounded-lg text-white font-semibold transition text-xs md:text-lg"
        >
          <FaGoogle /> Continue with Google
        </motion.button>

        <p className="text-center mt-5 text-xs md:text-lg text-white/80">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-teal-300 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
