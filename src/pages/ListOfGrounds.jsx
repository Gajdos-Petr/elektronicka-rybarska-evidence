import GroundsTable from '../components/table/SimpleTable'
import SectionTittle from '../components/SectionTittle'
import REVIRY_DATA from '../data/reviry.json'
import  columns  from '../data/columns/columnsGrounds'
import { useState, useEffect } from 'react'
import { COLORS } from '../assets/colors/colors';

function ListOfGrounds() {
  const [grounds, setGrounds] = useState();

  useEffect(() =>{
    fetch('http://localhost:8000/grounds')
    .then(res => {
      return res.json();
    })
    .then((data) => {
      setGrounds(data)
    })
    }, []);

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

 {grounds && <GroundsTable columns={columns} inputData={grounds} currentDataType={"grounds"}/>}
   </div>
   </section>
  )
}

export default ListOfGrounds