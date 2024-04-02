import React from "react";
import "./App.css";
// import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Form />
    </div>
  );
};

export default App;
