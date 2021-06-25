import "./TopBar.scss";
import { Person, Mail } from "@material-ui/icons";

const TopBar = ({ isMenuOpen, menuToggler }) => {
  return (
    <div className={`topbar ${isMenuOpen ? "active" : ""}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfolio.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+999999999</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>paraskangra14@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => menuToggler()}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
