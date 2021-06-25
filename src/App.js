import "./App.scss";
import Contact from "./components/Contact/Contact";
import TopBar from "./components/TopBar/TopBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import { useState } from "react";
import Menu from "./components/Menu/Menu";

import Particles from "react-tsparticles";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Particles
        className="particles"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#ffffff",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 40,
                duration: 1,
                opacity: 0.2,
                size: 20,
              },
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#000000",
            },
            links: {
              color: "#000000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
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
