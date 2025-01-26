import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Développeur Fullstack & Data Analyst</h1>
        <p className="subtitle">Spécialisé en Laravel, React, Django et Analyse de Données</p>
      </div>
      
      <div className="introduction">
        <div className="profile-image">
          {/* Ajoutez votre photo de profil ici */}
          <img src="/path/to/your/image.jpg" alt="Profile" />
        </div>
        <div className="bio">
          <h2>À Propos de Moi</h2>
          <p>
            Passionné par le développement web et l'analyse de données, 
            je combine expertise technique et vision analytique pour créer 
            des solutions innovantes.
          </p>
          <div className="contact-links">
            <a href="mailto:votre@email.com" className="contact-button">
              <i className="fas fa-envelope"></i> Me Contacter
            </a>
            <a href="https://github.com/votre-username" className="github-button">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 