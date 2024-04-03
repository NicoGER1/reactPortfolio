import React from 'react';
import icon from "../assets/logo3.png";
import "../styles/NavBar.css";

const NavBar = () => {
  const [showNav, setShowNav] = React.useState(false);

  React.useEffect(() => {
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

  return (
    <nav className={`navbar ${showNav ? "navbar-show" : ""}`}>
      <img className="logo" src={icon} alt="logo de NG" />
      <ul>
        <li>
          <a href="#Home">Accueil</a>
        </li>
        <li>
          <a href="#AboutMe">A propos</a>
        </li>
        <li>
          <a href="#Project">Projets</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
