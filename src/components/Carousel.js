import React, { useState } from 'react';
import '../Carousel.scss';

const Carousel = ({ images, selectedProject, handleProjectClick, handleMouseOver,projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (

        <div className="carousel-container">
           
            <div className={`slide`}>
                <img className={`${selectedProject == null ? "visible" : ""}`}src={images[currentIndex]} alt={`Image ${currentIndex}`} />
            </div>

            <div className='list-container'>
                <ul className="project-list">
                    <p className='title'>Projets</p>
                    {projects.map((project, index) => (
                        <li onMouseOver={() => { handleProjectClick(index); }}
                            onMouseOut={()=> {handleMouseOver()}}
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
export default Carousel;
