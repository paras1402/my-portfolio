import React from "react";
import { motion } from "framer-motion";

import "./Test.scss";
const Test = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return null;
};

export default Test;

<motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
></motion.h1>;
