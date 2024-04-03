import "../styles/Projects.css";
import projects from "../data/dataProject";

const Projects = () => {
  return (
    <>
      <section className="project-component">
        <div className="project-text">
          <h2>Mes projets</h2>
          <p>
            Voci les quelques projets sur lesquelles j&apos;ai pu travailler
          </p>
        </div>
        <div className="project-container">
          {projects.reverse().map((project) => (
            <article key={project.id}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />

                <h3 className="title3project">{project.title}</h3>
                <p className="paraproject">{project.description}</p>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
