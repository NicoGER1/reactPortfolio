import { useState, useEffect } from "react";
import icon from "../assets/logo3.png";
import "../styles/NavBar.css";
import burger from "../assets/burger.png";
import about from "../assets/about.png";
import contact from "../assets/contact.png";
import project from "../assets/project.png";
import home from "../assets/home.png";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBurgerClick = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <nav className={`navbar ${showNav ? "navbar-show" : ""}`}>
      <img className="logo" src={icon} alt="logo de NG" />

      <ul className={burgerMenu ? "show" : ""}>
        <li>
          <a href="#Home">
            <img src={home} alt="Accueil" className="picNav" />
          </a>
        </li>
        <li>
          <a href="#AboutMe">
            <img src={about} alt="A propos" className="picNav" />
          </a>
        </li>
        <li>
          <a href="#Project">
            <img src={project} alt="Projets" className="picNav" />
          </a>
        </li>
        <li>
          <a href="#Contact">
            <img src={contact} alt="Contact" className="picNav" />
          </a>
        </li>
      </ul>
      <div className="burger-icon" onClick={handleBurgerClick}>
        <img src={burger} alt="menu icon" className="burger" />
      </div>
    </nav>
  );
};

export default NavBar;
