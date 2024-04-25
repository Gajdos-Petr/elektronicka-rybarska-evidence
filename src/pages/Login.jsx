import React from 'react'
import LoginForm from '../components/buttons/LoginForm'
import '../styles/HeroSection.css'
import BackgroundImageFisher from '../images/32440116_7958650.jpg'
const loginPageStyle ={
  width: "100%",
minHeight: "86.5vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: 'yellow'


}

function Login() {

  return (
   <section style={loginPageStyle}>
    <div className='container-section two-column-container hero"'>
     <div className='hero-container left' >
  <img src={BackgroundImageFisher} alt="" />
 </div>
    <div className='hero-container right'>
    <LoginForm/>
 </div>
 </div>
   </section>
  )
}

export default Login