// PageTransition.jsx
// import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ type: "linear", duration: 1.5, ease: "easeInOut" }}
      key={location.key}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
