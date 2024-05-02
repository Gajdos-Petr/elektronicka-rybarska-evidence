import React from 'react'
import SimpleButton from '../components/buttons/SimpleButton'
import { COLORS } from '../assets/colors/colors'
import { useNavigate } from 'react-router-dom'

export default function Page404() {
  const navigate = useNavigate()

const section404Style ={
  width: "100%",
  minHeight: "86.5vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
const container404Style ={
  display: "flex",
  flexDirection: "column",
  alignItems: "center"


}
const goHomePage =() =>{
  navigate("/")
}
  return (
   <section style={section404Style}>
     <div className='container-section'>
    <div className="container-404-content" style={container404Style}>
    <h1  style={{fontSize : "10rem"}}>JEJDA!</h1>
      <p>404 - STRÁNKA NENALEZENA</p>
      <p>Ať děláme co děláme, Vámi zvolenou stránku nemůžeme nalézt. Pravděpodobně byla odebrána nebo je aktuálně nedostupná.</p>
          <SimpleButton background={COLORS.BOX_COLOR_LIGHT} url={"/"} content={"ZPĚT NA HLAVNÍ STRÁNKU"} handleClick= {goHomePage}/>
    </div>
    </div>
   </section>
  )
}
