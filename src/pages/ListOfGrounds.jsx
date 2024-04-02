import React,{useState, useEffect}  from 'react'
import BasicTable from '../components/BasicTable'
import SectionTittle from '../components/SectionTittle'
import { COLORS } from '../styles/colors';


function ListOfGrounds() {
const groundsStyle = {
  width: "100%",
  minHeight: "83.1vh",
  backgroundColor: "var(--site-main-background-color)",
  paddingTop: "2rem",
  alignItems: "center",
  display: "flex",
  flexDirection: "column"

}
  return (
    <section  style={groundsStyle}>
   <SectionTittle tittle={"Seznam revíru"} backgroundColor = {COLORS.BACKGROUND_COLOR} textDecorationColor={COLORS.BOX_COLOR_LIGHT} color = {COLORS.TEXT_COLOR_BLACK}/>

   <div className='container-section' style={{margin: "auto"}}>

 <BasicTable/>
   </div>
   </section>
  )
}

export default ListOfGrounds