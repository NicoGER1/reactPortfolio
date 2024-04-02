import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "./assets/project1.png",
      title: "Welcome to colchis",
      description: "Premier projet d'entré en formation",
      link: "https://github.com/NicoGER1/colchis-project",
    },
    {
      id: 2,
      image: "./assets/project2.png",
      title: "Welcome on Board",
      description: "Validation des bases CSS & HTML",
      link: "https://github.com/NicoGER1/WelcomeOnBoard",
    },
    {
      id: 3,
      image: "./assets/project3.png",
      title: "Squizz Game",
      description: "Quizz realisé en équipe",
      link: "https://github.com/NicoGER1/Project-1-CodeSquad",
    },
  ];

  return (
    <>
      <h2>Mes projets</h2>
      <p>Voci les quelques projets sur lesquelles j'ai pu travailler</p>
      <ul>
        {projects.reverse.map((project) => (
          <li key={project.id}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;
