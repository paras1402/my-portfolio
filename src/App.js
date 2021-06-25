import "./App.scss";
import Contact from "./components/Contact/Contact";
import TopBar from "./components/TopBar/TopBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <TopBar
        isMenuOpen={menuOpen}
        menuToggler={() => {
          setMenuOpen(!menuOpen);
        }}
      />
      <Menu
        isMenuOpen={menuOpen}
        menuToggler={() => {
          setMenuOpen(!menuOpen);
        }}
      ></Menu>
      <div className="sections">
        <Intro />
        <Portfolio></Portfolio>
        <Works></Works>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
