import React, {useContext} from 'react'
import Navigation from './Navigation'
import LoginButton from '../buttons/LoginButton'
import { UserContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import '../../assets/styles/Header.css'

import { COLORS } from '../../assets/colors/colors'
import { useState, useEffect } from 'react'
import {Menu, X} from 'lucide-react'

function Header() {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate()
  
  const signOutUser =() =>{
    alert("provadim odhlaseni uzivatele");
    setUser("")
    navigate("/")
  }
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
  useEffect(() => {
    showButton();
  });
  return (
<header>

<div className={`navbar  ${showMenu && 'active'}`}>
    <Navigation closeMenu={handleToggleMenu}/>
    {user && <LoginButton background={COLORS.BOX_COLOR_LIGHT} handleClick= {signOutUser} content={"ODHLÁSIT SE"}/> }
  </div>
  {button && <button className='hamburger' onClick={handleToggleMenu}>{showMenu ? <X size={32}/> : <Menu size={32}/>}</button>}
 
</header>
    )
}

export default Header