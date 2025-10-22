export const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const inputVariants = {
  focus: { scale: 1.02, borderColor: "#ffd166" },
};

export const buttonVariants = {
  hover: { scale: 1.05, backgroundColor: "#ffca3a", color: "#000" },
  tap: { scale: 0.95 },
};
