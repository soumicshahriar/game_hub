import { motion } from "motion/react";
import { Link } from "react-router";
import { use, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { registerUser } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [err, setErr] = useState("");

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // clear the success message
    setSuccess("");
    setError("");

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User Created Successfully");
        form.reset();
        setPassword("");
      })
      .catch((error) => {
        setError(error.message);
      });

    console.log({ name, photo, email, password });
  };

  const validatePassword = (value) => {
    setPassword(value);
    if (!/[A-Z]/.test(value)) {
      setErr("Must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(value)) {
      setErr("Must contain at least one lowercase letter.");
    } else if (value.length < 6) {
      setErr("Must be at least 6 characters long.");
    } else {
      setErr("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Animated background */}
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
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-xl lg:text-4xl font-extrabold text-center mb-6 text-white drop-shadow">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white/90 text-sm mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 text-white outline-none placeholder-white/70 text-xs md:text-lg"
            />
          </div>

          <div>
            <label className="block text-white/90 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 text-white outline-none placeholder-white/70 text-xs md:text-lg"
            />
          </div>

          <div>
            <label className="block text-white/90 text-sm mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="https://yourphoto.com/photo.jpg"
              className="w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 text-white outline-none placeholder-white/70 text-xs md:text-lg"
            />
          </div>

          <div className="relative">
            <label className="block text-white/90 text-sm mb-1">Password</label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 focus:bg-white/30 text-white outline-none placeholder-white/70 text-xs md:text-lg"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-10 text-white/70"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
            {err && (
              <p className="text-red-400 text-xs mt-1 font-medium">{err}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!!err}
            className={`w-full py-2 rounded-lg font-semibold shadow-lg transition ${
              err
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:opacity-90 text-xs md:text-lg"
            }`}
          >
            Register
          </motion.button>
        </form>

        <p className="text-center mt-5  text-white/80 text-xs md:text-lg">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-teal-300 font-semibold hover:underline "
          >
            Login
          </Link>
        </p>

        <p className="text-center text-teal-300">
          {success ? success : <p className="text-red-400">{error}</p>}
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
