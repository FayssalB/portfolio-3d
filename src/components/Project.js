import React, { useState } from 'react';
import '../Project.scss';
import Carousel from './Carousel';
import Header from './Header';

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [modal, setModal] = useState(false);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
  };
  const handleMouseOver=()=>{
    setSelectedProject(null);
  }

  const projects = [
    { name: "Dash (en cours)", images: ["img/DASH.png"], description: "Dash est un jeu d'ambiance" },
    { name: "Ajout d'anciens projets bientot", images: ["img/athletes.png"], description: "Commandez votre matelas de rêve" }
  ];

  return (
    <div className='project-container'>
        <Header onClick={() => setModal(!modal)} visible={modal ? "visible" : "not-visible"} />
      <div className='project-container-items'>
        <div></div>
        <Carousel images={selectedProject !== null && projects[selectedProject].images} selectedProject={selectedProject} handleProjectClick={handleProjectClick} handleMouseOver={handleMouseOver} projects={projects} />
      </div>
    </div>
  );
};

export default Project;
