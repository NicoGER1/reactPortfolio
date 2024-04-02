import React from "react";
import icon from "../assets/logo1.png";

const NavBar = () => {
  return (
    <nav>
      <img src={icon} alt="logo de NG" />
      <ul>
        <li>Accueil</li>
        <li>A propos</li>
        <li>Projets</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
