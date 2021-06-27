import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

const Intro = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Coding!!",
        "Web Development!!",
        "React..!!",
        "FullStack Development!!",
        "Space  :)",
        "Frontend Development",
        "Cricket",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="test-image-container">
          <motion.img
            className="planetone"
            src="assets/planet.svg"
            alt=""
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            whileHover={{ scale: 1.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.3 } }}
          />
          <motion.img
            className="planettwo"
            src="assets/planet-2.svg"
            alt=""
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: -300, right: 0, top: 0, bottom: 50 }}
            whileHover={{ scale: 1.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.6 } }}
          />
          <motion.img
            className="planetthree"
            src="assets/planet-3.svg"
            alt=""
            whileTap={{ scale: 0.7 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            whileHover={{ scale: 1.25 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2.6 } }}
          />
          <motion.img
            className="planetfour"
            src="assets/planet-4.svg"
            alt=""
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            whileHover={{ scale: 1.29 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <motion.h2
            style={{ color: "white" }}
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.4 }}
          >
            Hi There, I'm
          </motion.h2>

          <motion.h1
            style={{ color: "white" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            Paras
          </motion.h1>
          <motion.h3
            style={{ color: "white" }}
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.4 }}
          >
            I love <span ref={textRef}></span>
          </motion.h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
