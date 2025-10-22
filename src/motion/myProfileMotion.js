export const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const avatarVariants = {
  hover: { scale: 1.1, rotate: 5 },
  tap: { scale: 0.95 },
};

export const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};
