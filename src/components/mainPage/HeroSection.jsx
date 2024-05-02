import React, {useContext, useId} from 'react'
import MainPageButton from '../buttons/MainPageButton'
import { COLORS } from '../../assets/colors/colors';
import BackgroundImage from '../../assets/images/32440116_7958650.jpg';
import '../../assets/styles/HeroSection.css'
import { UserContext } from '../../App';
function HeroSection() {
  const id = useId();
  const [user, setUser] = useContext(UserContext);
  let urlToDashboard = "";
  if(user){
    urlToDashboard = "/dashboard";
  }else{
    urlToDashboard = "/Login";

  }

  const buttons = [
    { text: ["seznam", <br />, "revírů"], backgroundColor: COLORS.BOX_COLOR_DARK, color: COLORS.TEXT_COLOR_WHITE, url: "/seznam-reviru" },
    { text: ["členská", <br />, "docházka"], backgroundColor: COLORS.BOX_COLOR_LIGHT, color: COLORS.TEXT_COLOR_WHITE, url: urlToDashboard },
    { text: ["rybářský", <br />, "řád"], backgroundColor: COLORS.BOX_COLOR_DARK, color: COLORS.TEXT_COLOR_WHITE, url: "/rybarsky-rad" }
  ];
  return (
 <main id='home'>
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
      <div className="bottom">
            <div className="hero-buttons">
            {buttons.map((button, index) => (
                  <MainPageButton key={index} text={button.text} backgroundColor={button.backgroundColor} color={button.color} url={button.url} />
                ))}
            </div>
        </div>

 </div>

  </div>

 </div>
 </main>

  )
};

export default HeroSection