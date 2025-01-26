import React from 'react';

const Skills = () => {
  const skillsets = [
    {
      category: "Développement Backend",
      skills: [
        { name: "Laravel", level: 90, icon: "fab fa-laravel" },
        { name: "Django", level: 85, icon: "fab fa-python" },
        { name: "Node.js", level: 80, icon: "fab fa-node-js" }
      ]
    },
    {
      category: "Développement Frontend",
      skills: [
        { name: "React", level: 90, icon: "fab fa-react" },
        { name: "Vue.js", level: 75, icon: "fab fa-vuejs" },
        { name: "HTML/CSS", level: 95, icon: "fab fa-html5" }
      ]
    },
    {
      category: "Data Analysis",
      skills: [
        { name: "Python", level: 90, icon: "fab fa-python" },
        { name: "SQL", level: 85, icon: "fas fa-database" },
        { name: "Tableau", level: 80, icon: "fas fa-chart-bar" }
      ]
    }
  ];

  return (
    <div className="skills-container">
      <h2>Mes Compétences</h2>
      
      {skillsets.map((skillset, index) => (
        <div key={index} className="skillset">
          <h3>{skillset.category}</h3>
          <div className="skills-grid">
            {skillset.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-card">
                <i className={skill.icon}></i>
                <h4>{skill.name}</h4>
                <div className="skill-bar">
                  <div 
                    className="skill-level" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills; 