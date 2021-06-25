import "./PortfolioList.scss";

const PortfolioList = ({ key, title, active, setSelected, id }) => {
  return (
    <li
      onClick={() => setSelected(id)}
      className={`portfoliolist ${active ? "active" : ""}`}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
