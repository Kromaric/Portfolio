import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/github" element={<GithubActivity />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/parcours" element={<Timeline />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 