import React, { useState, useEffect } from 'react';
import './ContentGrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEye } from '@fortawesome/free-solid-svg-icons';

const ContentGrid = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Fetch projects from API when the component loads
  useEffect(() => {
    fetch('http://localhost:5000/api/projects') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const toggleLike = (id) => {
    setProjects(projects.map(project =>
      project.id === id ? { ...project, likes: project.liked ? project.likes - 1 : project.likes + 1, liked: !project.liked } : project
    ));
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project-grid-container">
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" onClick={() => openModal(project)}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-author">{project.author}</p>
              <div className="project-stats">
                <span className="likes" onClick={(e) => { e.stopPropagation(); toggleLike(project.id); }}>
                  <FontAwesomeIcon icon={faThumbsUp} style={{ color: project.liked ? 'blue' : 'gray', cursor: 'pointer' }} /> {project.likes}
                </span>
                <span className="views">
                  <FontAwesomeIcon icon={faEye} /> {project.views}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <h2>{selectedProject.title}</h2>
            <p><strong>Author:</strong> {selectedProject.author}</p>
            <p>{selectedProject.description}</p>
            <div className="modal-stats">
              <span className="likes" onClick={() => toggleLike(selectedProject.id)}>
                <FontAwesomeIcon icon={faThumbsUp} style={{ color: selectedProject.liked ? 'blue' : 'gray', cursor: 'pointer' }} /> {selectedProject.likes}
              </span>
              <span className="views">
                <FontAwesomeIcon icon={faEye} /> {selectedProject.views}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentGrid;
