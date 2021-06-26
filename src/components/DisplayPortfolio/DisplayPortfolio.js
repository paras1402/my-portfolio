import "./DisplayPortfolio.scss";
import { motion } from "framer-motion";
export const DisplayPortfolio = ({ id, title, image }) => {
  console.log(image);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 4 } }}
      className="item"
    >
      <img src={image} alt="" />
      <h3>{title}</h3>
    </motion.div>
  );
};
