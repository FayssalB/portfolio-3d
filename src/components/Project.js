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
    { name: "Dash", images: ["img/DASH.png"], description: "Dash est un jeu d'ambiance" },
    { name: "Literie3000", images: ["img/athletes.png"], description: "Commandez votre matelas de rêve" }
  ];

  return (
    <div className='project-container'>
        <Header onClick={() => setModal(!modal)} visible={modal ? "visible" : "not-visible"} />
      <div className='project-container-items'>
        <div><p>DdDDDDDDDDDDDDDDDDDDDDD</p></div>
        <Carousel images={selectedProject !== null && projects[selectedProject].images} selectedProject={selectedProject} handleProjectClick={handleProjectClick} handleMouseOver={handleMouseOver} projects={projects} />
      </div>
    </div>
  );
};

export default Project;
