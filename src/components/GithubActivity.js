import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GithubActivity = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // Remplacez 'VOTRE_USERNAME' par votre nom d'utilisateur GitHub
        const response = await axios.get('https://api.github.com/users/Kromaric');
        const reposResponse = await axios.get('https://api.github.com/users/Kromaric/repos');
        
        setGithubData({
          profile: response.data,
          repos: reposResponse.data
        });
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données GitHub:', error);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="github-activity">
      <h2>Mon Activité GitHub</h2>
      <div className="github-stats">
        <div className="stat-card">
          <h3>Repositories Publics</h3>
          <p>{githubData?.profile.public_repos}</p>
        </div>
        <div className="stat-card">
          <h3>Followers</h3>
          <p>{githubData?.profile.followers}</p>
        </div>
        <div className="repositories">
          <h3>Mes derniers repositories</h3>
          <div className="repo-list">
            {githubData?.repos.slice(0, 6).map(repo => (
              <div key={repo.id} className="repo-card">
                <h4>{repo.name}</h4>
                <p>{repo.description}</p>
                <div className="repo-stats">
                  <span><i className="fas fa-star"></i> {repo.stargazers_count}</span>
                  <span><i className="fas fa-code-branch"></i> {repo.forks_count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubActivity; 