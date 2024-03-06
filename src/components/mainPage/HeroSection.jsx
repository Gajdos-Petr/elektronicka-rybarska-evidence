import React from 'react'
import MainPageButton from '../buttons/MainPageButton'
import { COLORS } from '../../styles/colors';
import BackgroundImage from '../../images/32440116_7958650.jpg';
import '../../styles/HeroSection.css'

function HeroSection() {
  return (
 <main>
 <div className="hero">
  <div className="two-column-container">
  <div className='hero-container left' >
  <img src={BackgroundImage} alt="" />
 </div>
    <div className='hero-container right'>
      <div className='inner-container top'>
      <div className="hero-tittle">
      ELEKTRONICKÝ RYBÁŘSKÝ SYSTÉM
      </div>
      </div>
      <div class="bottom">
            <div class="hero-buttons">
            <MainPageButton text={["seznam", <br></br>,  "revírů"]}  backgroundColor={COLORS.BOX_COLOR_DARK}  color={COLORS.TEXT_COLOR_WHITE}/>
            <MainPageButton text={["členská", <br></br>,  "docházka"]} backgroundColor={COLORS.BOX_COLOR_LIGHT} color={COLORS.TEXT_COLOR_WHITE}/>
            <MainPageButton text={["rybářský", <br></br>,  "řád"]} backgroundColor={COLORS.BOX_COLOR_DARK} color={COLORS.TEXT_COLOR_WHITE}/>
   
            </div>
        </div>

 </div>

  </div>

 </div>
 </main>

  )
};

export default HeroSection