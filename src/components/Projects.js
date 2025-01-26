import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Application Analytics Dashboard",
      description: "Dashboard d'analyse de données avec Django et React, intégrant des visualisations de données avancées",
      technologies: ["Django", "React", "Python", "D3.js"],
      image: "/path/to/project1-image.jpg",
      githubLink: "https://github.com/yourusername/project1",
      liveDemo: "https://project1-demo.com",
      category: "Data Analysis"
    },
    {
      id: 2,
      title: "Plateforme E-learning",
      description: "Système de gestion de cours en ligne avec Laravel et Vue.js",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
      image: "/path/to/project2-image.jpg",
      githubLink: "https://github.com/yourusername/project2",
      liveDemo: "https://project2-demo.com",
      category: "Web Development"
    },
    {
      id: 3,
      title: "API de Prédiction ML",
      description: "API REST pour des modèles de machine learning avec FastAPI et React",
      technologies: ["Python", "FastAPI", "React", "scikit-learn"],
      image: "/path/to/project3-image.jpg",
      githubLink: "https://github.com/yourusername/project3",
      liveDemo: "https://project3-demo.com",
      category: "Machine Learning"
    }
  ];

  return (
    <div className="projects-container">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-category">{project.category}</div>
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                  <i className="fab fa-github"></i> Code Source
                </a>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                  <i className="fas fa-external-link-alt"></i> Démo Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;