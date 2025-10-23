// UpdateInfo.jsx
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  buttonVariants,
  containerVariants,
  inputVariants,
} from "../motion/updateInfo";

const UpdateInfo = () => {
  const { user, updateUserInfo, loading, setLoading } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserInfo(name, photoURL)
      .then(() => {
        alert("Profile updated successfully!");
        setLoading(false);
        navigate("/my-profile");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <motion.div
      className="max-w-md mx-auto mt-10 p-8 bg-linear-to-br from-[#076d7b] to-[#004953] text-white rounded-xl shadow-xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-2xl font-bold mb-6 text-[#ffd166] text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        Update Information
      </motion.h2>

      <form onSubmit={handleUpdate} className="space-y-5">
        <motion.div
          whileFocus="focus"
          variants={inputVariants}
          className="flex flex-col"
        >
          <label className="mb-2 text-[#ffd166] font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3 py-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#ffd166]"
            required
          />
        </motion.div>

        <motion.div
          whileFocus="focus"
          variants={inputVariants}
          className="flex flex-col"
        >
          <label className="mb-2 text-[#ffd166] font-medium">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="px-3 py-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#ffd166]"
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded font-semibold text-black bg-[#ffd166] border-0 shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {loading ? "Updating..." : "Update Information"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default UpdateInfo;
