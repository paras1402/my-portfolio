import "./DisplayPortfolio.scss";

export const DisplayPortfolio = ({ id, title, image }) => {
  console.log(image);
  return (
    <div className="item">
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  );
};
