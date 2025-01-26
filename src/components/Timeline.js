import React from 'react';

const Timeline = () => {
  const experiences = [
    {
      id: 1,
      date: "2022 - Présent",
      title: "Développeur Fullstack Senior",
      company: "Entreprise Tech",
      description: "Développement d'applications web avec Laravel et React, analyse de données",
      technologies: ["Laravel", "React", "Python", "SQL"]
    },
    {
      id: 2,
      date: "2020 - 2022",
      title: "Data Analyst",
      company: "Société Analytics",
      description: "Analyse de données et création de dashboards",
      technologies: ["Python", "Tableau", "SQL", "R"]
    },
    {
      id: 3,
      date: "2018 - 2020",
      title: "Développeur Backend",
      company: "Startup Innovante",
      description: "Développement d'APIs avec Django",
      technologies: ["Django", "PostgreSQL", "Redis"]
    }
  ];

  return (
    <div className="timeline-container">
      <h2>Mon Parcours</h2>
      
      <div className="timeline">
        {experiences.map(exp => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
              <div className="timeline-technologies">
                {exp.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 