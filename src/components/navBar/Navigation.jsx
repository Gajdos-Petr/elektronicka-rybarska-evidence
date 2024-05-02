import React, {useContext} from 'react';
import '../../assets/styles/Navigation.css';
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { UserContext } from '../../App';

function Navigation({ closeMenu }) {
  const [user, setUser] = useContext(UserContext);

  const location = useLocation().pathname;
  const isHome = location === '/';
  
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
            {user ? <Link to="/dashboard" onClick={closeMenu}>Docházka</Link> : <Link to="/Login" onClick={closeMenu}>Docházka</Link>}
          </li>
        )}
        <li>
        {/*<Link to="/about">O nás</Link>*/}
        <HashLink to='/#aboutUs' onClick={closeMenu}>O nás</HashLink>
        </li>
        <li>
        <HashLink to='/#contact' onClick={closeMenu}>Kontakt</HashLink>
        </li>

      </ul>
    </div>
  )
}

export default Navigation