import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Detail.scss';
import Header from './Header';

const Detail = () => {
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const projects = [
    { name: "Dash (en cours)", images: ["img/DASH.png"], description: "Le projet Dash est un jeu multijoueur où les joueurs tentent de faire deviner des mots à leurs coéquipiers en utilisant des indices.Le projet est actuellement en cours de developpement.", front: "React Native / SASS", back: "NodeJS" },
    { name: "Literie3000", images: ["img/athletes.png"], description: "Commandez votre matelas de rêve" }
  ];
  return (
    <div className='detail-container'>
      <Header onClick={() => setModal(!modal)} visible={modal ? "visible" : "not-visible"} />
      <div className='detail-infos'>
        <div className='detail-elements'>
          <h2>{projects[id].name}</h2>
          <p>{projects[id].description}</p>
          <div className='detail-img-container'>
            <img style={{ width: 200, height: 400, marginRight: 10 }} src='/img/1.jpg' alt='oui' />
            <img style={{ width: 200, height: 400, marginRight: 10 }} src='/img/2.jpg' alt='oui' />
            <img style={{ width: 200, height: 400, marginRight: 10 }} src='/img/3.jpg' alt='oui' />
            <img style={{ width: 200, height: 400, marginRight: 10 }} src='/img/4.jpg' alt='oui' />
          </div>
          <div className='detail-techno'>
            <p>Front: {projects[id].front}</p>
            <p>Back: {projects[id].back}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail