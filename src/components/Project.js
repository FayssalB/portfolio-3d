import React, { useState } from 'react';
import '../Project.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
    { name: "Dash", images: ["img/DASH.png", "img/athletes.png"], description: "Dash est un jeu d'ambiance" },
    { name: "Literie3000", images: ["img/DASH.png", "img/DASH.png"], description: "Commandez votre matelas de rêve" },
    
  ];

  return (
    <div className="carousel-container">
      <div className="selected-images">
        <Carousel showArrows={true} selectedItem={selectedImage} onChange={handleImageChange}>
          {projects[selectedProject].images.map((image, index) => (
            <div key={index} className='img-container'> 
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => handleProjectClick(index)}
            className={index === selectedProject ? 'selected' : ''}
          >
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
