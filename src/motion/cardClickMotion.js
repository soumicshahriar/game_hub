export const cardVariants = {
  initial: { scale: 1, opacity: 1 },
  click: { scale: 0.95, opacity: 0.8 },
  hover: { scale: 1.03, boxShadow: "0px 20px 30px rgba(0,0,0,0.2)" },
};

export const transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};
