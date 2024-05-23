import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <section className="FooterComponent">
      <footer className="footer-container">
        <div className="linkreseau">
          <a
            href="https://github.com/NicoGER1"
            target="blank"
            className="footLink"
          >
            <img src={github} alt="logo Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-gerin/"
            target="blank"
            className="footLink"
          >
            <img src={linkedin} alt="logo linkedin" />
          </a>
        </div>
        <p>Designed by Nicolas Gerin</p>
      </footer>
    </section>
  );
}

export default Footer;
