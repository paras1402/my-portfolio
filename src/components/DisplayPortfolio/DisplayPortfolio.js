import "./DisplayPortfolio.scss";
import { motion } from "framer-motion";
export const DisplayPortfolio = ({ id, title, image }) => {
  console.log(image);
  return (
    <motion.div className="item">
      <img src={image} alt="" />
      <h3>{title}</h3>
    </motion.div>
  );
};
