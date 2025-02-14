import React, { useState, useEffect } from 'react';
import './ContentGrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';  // Adjust path based on your project structure
import Footer from './Footer';  // Adjust path based on your project structure

const ContentGrid = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: "HYPERION: A.I. Packaging", author: "Multiple Owners", image: "https://worldbranddesign.com/wp-content/uploads/2024/05/1-HYPERION-world-brand-design.jpg",likes:3,views: "10", liked: false, description: "." },
    { id: 2, title: "The Longest Journey", author: "Tom Walker", image: "https://www.kalakari.in/wp-content/uploads/2018/09/Contemporary-artwork.jpg", likes: 7, views: "8", liked: false, description: "A beautifully designed story-driven visual project." },
    { id: 3, title: "Graphic Design", author: "Mark Ofosu", image: "https://img.freepik.com/premium-psd/graphic-design-template_23-2150868707.jpg", likes: 1, views: "8", liked: false },
    { id: 4, title: "Sankofa Sculpture", author: "kingsley Siaw", image: "https://images1.novica.net/pictures/5/p218873_2_400.jpg", likes: 2, views: "10", liked: false },
    { id: 5, title: "ICONIC Label Rebrand", author: "Duro Merin", image: "https://bbranded.com/wp-content/uploads/2018/03/Bblog_2017LogoRedesigns_Header.png", likes: 0, views: "2", liked: false },
    { id: 6, title: "Pencil Art", author: "Anna", image: "https://api.artgidi.com/assets/image/artworks/770/20220707135137-165719829768186705362c6d6d9d1af9.jpg", likes: 4, views: "4", liked: false },
    { id: 7, title: "Branding & UI Design", author: "Alex Griendling", image: "https://i.ytimg.com/vi/5SHM64EFdFM/sddefault.jpg", likes: 1, views: "2", liked: false },
    { id: 8, title: "Fusing Visual Styles & Photography", author: "Matthew Garcia", image: "https://www.kunstloft.com/wordpress/en_UK/eu/wp-content/uploads/2023/08/camera-g600862fcc_1280-1024x768.jpg", likes: 5, views: "6", liked: false },
    { id: 9, title: "The Corea Dance Group", author: "Cl of MAK", image: "https://ichef.bbci.co.uk/images/ic/976x549/p07034mf.jpg", likes: 4, views: "9", liked: false },
    { id: 10, title: "Tels Graphic Design Studio", author: "Multiple Owners", image: "https://images.squarespace-cdn.com/content/v1/5b5ce329cc8fedfa5b4bf664/1588546919518-96OV2FYKRWDSET3YH68Y/Design-page-001.jpg", likes: 0, views: "5", liked: false },
    { id: 11, title: "Mortem: Fusing Visual Styles", author: "Matthew Garcia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGczAvfzskD0yo9Ed6CdKuaqrrrh76Ds7izw&s", likes: 6, views: "10", liked: false },
    { id: 12, title: "Del cielo Cali la sucursal", author: "Cl of MAK", image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/956e36184679595.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png", likes: 3, views: "9", liked: false },
  ]);
  
  const [selectedProject, setSelectedProject] = useState(null);
  
  const toggleLike = (id) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, likes: project.liked ? project.likes - 1 : project.likes + 1, liked: !project.liked } : project
    ));
  };
  
  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="project-grid-container">
      <Navbar />  {/* Navbar integrated at the top */}

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

      <Footer />  {/* Footer integrated at the bottom */}
    </div>
  );
};

export default ContentGrid;
