import React from 'react'
import LoginForm from '../components/forms/LoginForm'
import '../assets/styles/HeroSection.css'
import BackgroundImageFisher from '../assets/images/32440116_7958650.jpg'

const loginPageStyle ={
width: "100%",
minHeight: "86.5vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
}
const loginWrapperStyle ={
  maxWidth: "380px",
  textAlign: "center"
}

function Login() {

  return (
   <section style={loginPageStyle}>
    <div className='container-section two-column-container hero"'>
     <div className='hero-container left' >
  <img src={BackgroundImageFisher} alt="" />
 </div>
    <div className='hero-container right'>
   <div className='login-wrapper' style={loginWrapperStyle}>
   <h1 style={{color: "var(--box-color-light)", fontSize: "var(--link-box-fonz-size)"}}>PŘIHLÁŠENÍ DO SYSTÉMU</h1>
      <p>Pro přihlášení do systému využijte své přidělné identifikáční číslo společně s heslem.</p>
    <LoginForm/>
   </div>
 </div>
 </div>
   </section>
  )
}

export default Login