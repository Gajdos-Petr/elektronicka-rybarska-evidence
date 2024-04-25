import GroundsTable from '../components/table/SimpleTable'
import SectionTittle from '../components/SectionTittle'
import REVIRY_DATA from '../sources/reviry.json'
import  columns  from '../components/columnsGrounds'

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

 <GroundsTable columns={columns} inputData={REVIRY_DATA}/>
   </div>
   </section>
  )
}

export default ListOfGrounds