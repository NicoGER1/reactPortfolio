import * as React from "react";

import icon from "../assets/logo3.png";
import "../styles/NavBar.css";
import { StyledEngineProvider } from "@mui/material/styles";
import Menu from "./Menu";

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
      <React.StrictMode>
        <StyledEngineProvider injectFirst>
          <Menu />
        </StyledEngineProvider>
      </React.StrictMode>
    </nav>
  );
};

export default NavBar;
