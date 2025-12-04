import { motion } from "motion/react";
import { use } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring", stiffness: 300 },
  },
  tap: { scale: 0.9 },
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-linear-to-br from-[#004953] to-[#076d7b] text-white py-8 mt-10"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand / Text */}
        <motion.p
          className="text-sm md:text-base text-[#ffd166] text-center md:text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.5 },
          }}
        >
          © {year} GameHub — Built with ❤️ by Soumic Shahriar
          <div>
            <p>
              <Link
                className="text-white hover:text-yellow-300"
                to={"/all-games"}
              >
                All Games
              </Link>
            </p>
            <p>
              <Link
                className="text-white hover:text-yellow-300"
                to={"/recommended-games"}
              >
                Recommended Games
              </Link>
            </p>
          </div>
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.5 },
          }}
        >
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#ffd166] transition"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaFacebookF size={20} />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#ffd166] transition"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-[#ffd166] transition"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaLinkedinIn size={20} />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
