import React from 'react'
import Navigation from './Navigation'
import LoginButton from '../buttons/LoginButton'
import '../../styles/NavBar.css'
import { COLORS } from '../../styles/colors'
import { useState } from 'react'
import {Menu, X} from 'lucide-react'

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  
  const handleClick = () =>setClick(!click);
  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(true);
    }else{
      setButton(false);
    }
  } ;
  window.addEventListener('resize', showButton);
  
  return (
<nav>

  <div className='navbar-middle-section'>
    <Navigation />
    {button && <button onClick={handleClick}>{click ? <X/> : <Menu/>}</button>}

  </div>
  <div className='navbar-right-section'>
 <LoginButton background={COLORS.BOX_COLOR_LIGHT} />
  </div>

</nav>
    )
}

export default NavBar