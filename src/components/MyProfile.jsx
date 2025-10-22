// MyProfile.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  avatarVariants,
  buttonVariants,
  containerVariants,
} from "../motion/myProfileMotion";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <motion.div
      className="p-6 flex flex-col items-center justify-center shadow-md bg-[#004953] text-white rounded-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <motion.img
        src={user?.photoURL || "https://i.ibb.co/2nYVQbR/default-avatar.png"}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4 border-2 border-[#ffd166]"
        variants={avatarVariants}
        whileHover="hover"
        whileTap="tap"
      />

      <p className="mb-2">
        <strong>Name:</strong> {user?.displayName || "N/A"}
      </p>
      <p className="mb-4">
        <strong>Email:</strong> {user?.email}
      </p>

      <motion.button
        onClick={() => navigate("/update-info")}
        className="btn bg-[#ffd166] hover:bg-[#ffca3a] border-0 text-black"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Update Information
      </motion.button>
    </motion.div>
  );
};

export default MyProfile;
