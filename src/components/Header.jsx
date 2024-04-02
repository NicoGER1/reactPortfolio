import React from "react";
import NavBar from "./NavBar";
import avatar from "../assets/nico.jpg";

const Header = () => {
  return (
    <>
      <NavBar />
      <header>
        <div>
          <h1>Nicolas Gerin</h1>
          <p>Developpeur web</p>
          <img src={avatar} alt="nicoAvatar" />
        </div>
      </header>
    </>
  );
};

export default Header;
