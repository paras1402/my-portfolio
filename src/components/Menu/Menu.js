import "./Menu.scss";

const Menu = ({ isMenuOpen, menuToggler }) => {
  return (
    <div className={`menu ${isMenuOpen ? "active" : ""}`}>
      <ul
        onClick={() => {
          menuToggler();
        }}
      >
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
