import React from 'react'

function SectionTittle(props) {
    const tittleStyle ={
        width: "100%",
        backgroundColor: "transparent",
        float: "left",
        paddingTop: "2%",
        fontSize: "2.2rem",
        textTransform: "uppercase",
        fontWeight: "bold",
        textDecoration: "overline",
        textDecorationColor: props.textDecorationColor,
        color: props.color
    }
  return (
    <div className='tittle' style={tittleStyle}><b style={{paddingLeft: "3%"}}>{props.tittle}</b></div>
  )
}

export default SectionTittle