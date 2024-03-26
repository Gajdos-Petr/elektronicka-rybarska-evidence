import React from 'react'
import Navigation from './Navigation'
import LoginButton from '../buttons/LoginButton'
import '../../styles/NavBar.css'
import { COLORS } from '../../styles/colors'
import { useState } from 'react'
import {Menu, X} from 'lucide-react'

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const [button, setButton] = useState(false);
  
  const handleToggleMenu  = () =>setShowMenu(!showMenu);

  const showButton = () =>{
    if(window.innerWidth <= 768){
      setButton(true);
    }else{
      setButton(false);
    }
  } ;
  window.addEventListener('resize', showButton);
  
  return (
<nav>

  <div className='navbar-middle-section'>

    {button && <button onClick={handleToggleMenu}>{showMenu ? <X/> : <Menu/>}</button>}
    <div className={`nav-elements  ${showMenu && 'active'}`}>
    <Navigation/>
    <LoginButton background={COLORS.BOX_COLOR_LIGHT} />

        </div>
  </div>
  <div className='navbar-right-section'>
  </div>

</nav>
    )
}

export default NavBar