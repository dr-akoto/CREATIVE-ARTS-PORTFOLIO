import React, { useState, useEffect, useCallback } from 'react';
import './ProjectGrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEye } from '@fortawesome/free-solid-svg-icons';

// Import images
import hyperion from '../assets/Hyperion ai.png';
import covesea from '../assets/Covesea.jpg';

const ProjectGrid = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "HYPERION: A.I. Packaging",
      author: "Multiple Owners",
      image: hyperion,
      likes: 302,
      views: "2.3k"
    },
    {
      id: 2,
      title: "The Longest Journey",
      author: "Tom Walker",
      image: covesea,
      likes: 423,
      views: "3.1k"
    },
    {
      id: 3,
      title: "Cervesse II",
      author: "Tim Lindner",
      image: hyperion,
      likes: 567,
      views: "4.2k"
    },
    {
      id: 4,
      title: "Janvier 2025",
      author: "Lili des étoiles",
      image: covesea,
      likes: 234,
      views: "1.8k"
    },
    {
      id: 5,
      title: "ICONIC Label Rebrand",
      author: "Duro Merin",
      image: hyperion,
      likes: 456,
      views: "3.5k"
    },
    {
      id: 6,
      title: "The street lights cast a soft glow",
      author: "Anna Wilson",
      image: covesea,
      likes: 678,
      views: "5.1k"
    },
    {
      id: 7,
      title: "Studio Brazi | Branding & UI Design",
      author: "Multiple Owners",
      image: hyperion,
      likes: 345,
      views: "2.7k"
    },
    {
      id: 8,
      title: "Mortem: Fusing Visual Styles",
      author: "Matthew Garcia",
      image: covesea,
      likes: 789,
      views: "6.3k"
    },
    {
      id: 9,
      title: "Del cielo Cali la sucursal",
      author: "Cl of MAK",
      image: hyperion,
      likes: 234,
      views: "1.9k"
    },
    // Add more projects as needed
  ]);

  const [loading, setLoading] = useState(false);

  // Move handleScroll into useCallback
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      loadMore();
    }
  }, []); // Empty dependency array since it doesn't use any external values

  const loadMore = () => {
    setLoading(true);
    // Simulate loading more content
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // Add handleScroll as a dependency

  return (
    <div className="project-grid-container">
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
            </div>
            <div className="project-info">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-author">{project.author}</p>
              </div>
              <div className="project-stats">
                <span className="likes">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  {project.likes}
                </span>
                <span className="views">
                  <FontAwesomeIcon icon={faEye} />
                  {project.views}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading && <div className="loading">Loading more...</div>}
    </div>
  );
};

export default ProjectGrid; 