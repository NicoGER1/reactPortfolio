import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Form from "./components/Form";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Form />
      </div>
      <footer className="footer-container">
        <div className="linkreseau">
          <a href="https://github.com/NicoGER1" target="blank">
            <img src={github} alt="logo Github" />
          </a>
          <a href="https://www.linkedin.com/in/nicolas-gerin/" target="blank">
            <img src={linkedin} alt="logo linkedin" />
          </a>
        </div>
        <p>Designed by Nicolas Gerin</p>
      </footer>
    </>
  );
};

export default App;
