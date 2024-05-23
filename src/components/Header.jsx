import avatar from "../assets/nico2.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <header className="super-hero" id="AboutMe">
        <div className="hero-banner">
          <h1 className="titleName">Nicolas Gerin</h1>
          <p className="sstitle">Développeur web</p>
        </div>
        <img className="avatar" src={avatar} alt="nicoAvatar" />
      </header>
    </>
  );
};

export default Header;
