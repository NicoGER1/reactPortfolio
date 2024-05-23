import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default App;
