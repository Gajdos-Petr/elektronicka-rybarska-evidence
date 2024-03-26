import React from 'react';
import '../../styles/Navigation.css';
import { Link } from "react-router-dom";


function Navigation({ closeMenu }) {

  
  return (
    <div className='menu'>
      <ul>
        <li>
        <Link to="/" onClick={closeMenu}>Domů</Link>
        </li>
        <li>
        {/*<Link to="/about">O nás</Link>*/}
        <a href='#aboutUs' onClick={closeMenu}>O nás</a>
        </li>
        <li>
        <a href='#contact' onClick={closeMenu}>Kontakt</a>
        </li>
      </ul>
    </div>
  )
}

export default Navigation