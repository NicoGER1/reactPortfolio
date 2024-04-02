import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <Form />
    </div>
  );
};

export default App;
