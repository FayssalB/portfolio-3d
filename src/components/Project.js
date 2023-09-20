import React, { useState } from 'react';
import '../Project.scss';
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from './Carousel';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
    setSelectedImage(0);
  };

  const handleImageChange = (index) => {
    setSelectedImage(index);
  };

  const projects = [
    { name: "Dash", images: ["img/DASH.png"], description: "Dash est un jeu d'ambiance" },
    { name: "Literie3000", images: ["img/athletes.png"], description: "Commandez votre matelas de rêve" },

  ];

  return (
    <div className="container">

      <Carousel images={projects[selectedProject].images} />
      <div className='list-container'>
        <ul className="project-list">
          <p className='title'>Projets</p>
          {projects.map((project, index) => (
            <li onMouseOver={() => { handleProjectClick(index); }}
              key={index}
              onClick={() => handleProjectClick(index)}
              className={index === selectedProject ? 'selected' : ''}
            >
              <span className="arrow"> ➡️</span>{project.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
