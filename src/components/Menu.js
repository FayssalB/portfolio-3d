import React from 'react';
// import '../App.scss';
import "../Menu.scss";
import { Link } from 'react-router-dom';

const Menu = ({visible}) => {

  return (
    <div className={`${visible} modal`}>
      <nav>
        <ul>
          <li><Link to={"/"} className='modal-link'>ACCEUIL</Link></li>
          <li><Link to={"/project"} className='modal-link'>PROJETS</Link></li>
          <li><Link to={"/resume"} className='modal-link'>RESUME</Link></li>
          <li><Link to={"/contact"} className='modal-link'>CONTACT</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu