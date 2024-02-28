import React from 'react'
import MainPageButton from '../buttons/MainPageButton'
import { COLORS } from '../../styles/colors';
import BackgroundImage from '../../images/32440116_7958650.jpg';
import '../../styles/MainContainer.css'

function MainContainer() {
  return (
 <main>
      <div className='main-container left' style={{backgroundImage: `url(${BackgroundImage})`  }}>


        </div>
    <div className='main-container right'>
      <div className='inner-container top'>
      ELEKTRONICKÝ RYBÁŘSKÝ SYSTÉM
      </div>
      <div className='inner-container bottom'>
      <MainPageButton text="seznam revírů" backgroundColor={COLORS.BOX_COLOR_DARK}  color={COLORS.TEXT_COLOR_WHITE}/>
        <MainPageButton text="členská docházka" backgroundColor={COLORS.BOX_COLOR_LIGHT} color={COLORS.TEXT_COLOR_WHITE}/>
        <MainPageButton text="rybářský řád" backgroundColor={COLORS.BOX_COLOR_DARK} color={COLORS.TEXT_COLOR_WHITE}/>
   
      </div>
 </div>
 </main>

  )
};

export default MainContainer