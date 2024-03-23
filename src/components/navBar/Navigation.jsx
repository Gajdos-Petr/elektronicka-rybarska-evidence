import React from 'react';
import '../../styles/Navigation.css';
import { Link } from "react-router-dom";


function Navigation() {

  
  return (
    <div className='menu'>
      <ul>
        <li>
        <Link to="/">Domů</Link>
        </li>
        <li>
        {/*<Link to="/about">O nás</Link>*/}
        <a href='#aboutUs'>O nás</a>
        </li>
        <li>
        <a href='#contact'>Kontakt</a>
        </li>
      </ul>
    </div>
  )
}

export default Navigation