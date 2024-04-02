import React from 'react';
import '../../styles/Navigation.css';
import { Link, useLocation } from "react-router-dom";


function Navigation({ closeMenu }) {
  const location = useLocation().pathname;
  const isHome = location === '/';
  console.log(isHome);
  
  return (
    <div className='menu'>
      <ul>
        <li>
        <Link to="/" onClick={closeMenu}>Domů</Link>
        </li>
        {!isHome && (
          <li>
            <Link to="/seznam-reviru" onClick={closeMenu}>Seznam revírů</Link>
          </li>
        )}
        {!isHome && (
          <li>
            <Link to="/rybarsky-rad" onClick={closeMenu}>Řád</Link>
          </li>
        )}
        {!isHome && (
          <li>
            <Link to="/Login" onClick={closeMenu}>Docházka</Link>
          </li>
        )}
        <li>
        {/*<Link to="/about">O nás</Link>*/}
        <a href='/#aboutUs' onClick={closeMenu}>O nás</a>
        </li>
        <li>
        <a href='/#contact' onClick={closeMenu}>Kontakt</a>
        </li>

      </ul>
    </div>
  )
}

export default Navigation