import "../styles/Skills.css";
import SkillsList from "../data/data.Skills";

const Skills = () => {
  return (
    <section className="skills-component" >
      <h2 className="title3">Mes compétences</h2>
      <div className="skill-container">
        {SkillsList.map((skill) => (
          <article key={skill.id}>
            <img src={skill.icon} alt={skill.name} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
