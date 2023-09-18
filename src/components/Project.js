import React, { useState } from 'react';
import '../Project.scss';

const Project = () => {
  const [selectedImage, setSelectedImage] = useState("img/DASH.png")

  const handleListClick = (element) => {
    setSelectedImage(element);
  }
//////////////////////////FAIRE UN CAROUSEL
  const projects = [
    { name: "Dash (en cours)", images: ["img/DASH.png","img/athletes.png"], description: "Dash est un jeux d'ambiance" },
    { name: "Literie3000", images: ["img/DASH.png","img/DASH.png"], description: "Commandez votre matelas de reve" }]

  return (
    <div className="image-list-container" >
      <div className="selected-image">
        {selectedImage && <img src={selectedImage} alt="Image du projet" />}
      </div>
      <ul className="word-list">
        {projects.map((item, index) => (
          <li key={index} onClick={() => handleListClick(item.image)}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Project