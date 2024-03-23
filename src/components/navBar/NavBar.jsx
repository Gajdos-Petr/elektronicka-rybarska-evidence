import React from 'react'
import Navigation from './Navigation'
import LoginButton from '../buttons/LoginButton'
import '../../styles/NavBar.css'
import { COLORS } from '../../styles/colors'
import { useState } from 'react'
import {Menu, X} from 'lucide-react'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toogleNavBar = () =>{
    setIsOpen(!isOpen);
  };
  return (
<nav>
  <div className='navbar-left-section'>
  </div>
  <div className='navbar-middle-section'>
    <Navigation />
    <button onClick={toogleNavBar}>{isOpen ? <X/> : <Menu/>}</button>

  </div>
  <div className='navbar-right-section'>
 <LoginButton background={COLORS.BOX_COLOR_LIGHT} />
  </div>

</nav>
    )
}

export default NavBar