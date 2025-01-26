import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">MonPortfolio</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/skills" className="nav-link">Compétences</Link>
        <Link to="/projects" className="nav-link">Projets</Link>
        <Link to="/github" className="nav-link">GitHub</Link>
      </div>
    </nav>
  );
};

export default Navbar; 