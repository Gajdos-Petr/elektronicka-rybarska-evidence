import React from 'react'
import Navigation from './Navigation'
import LoginButton from '../buttons/LoginButton'
import '../../styles/NavBar.css'
import { COLORS } from '../../styles/colors';

function NavBar() {
  return (
<nav>
  <div className='navbar-left-section'>
  </div>
  <div className='navbar-middle-section'>
    <Navigation />
  </div>
  <div className='navbar-right-section'>
  <LoginButton background={COLORS.BOX_COLOR_LIGHT} />
  </div>

</nav>
    )
}

export default NavBar