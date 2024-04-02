import React from "react";

const Skills = () => {
  const SkillsList = [
    { id: 1, name: "JavaScript", icon: "./assets/js.png" },
    { id: 2, name: "html", icon: "./assets/html.png" },
    { id: 3, name: "css", icon: "./assets/CSS3.png" },
    { id: 4, name: "react", icon: "./assets/react.png" },
    { id: 5, name: "node", icon: "./assets/node.png" },
    { id: 6, name: "sql", icon: "./assets/sql.png" },
    { id: 7, name: "vscode", icon: "./assets/vscode.webp" },
    { id: 8, name: "git", icon: "./assets/git.webp" },
    { id: 9, name: "apple", icon: "./assets/apple.png" },
    { id: 10, name: "office", icon: "./assets/office.png" },
  ];

  return (
    <section>
      <h2>Mes compétences</h2>
      <div>
        <ul>
          {SkillsList.map((skill) => (
            <li key={skill.id}>
              <img src={skill.icon} alt={skill.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
