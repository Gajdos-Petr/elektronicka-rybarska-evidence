import React from 'react'

function MainPageButton(props) {
    const myButtonStyle = {
        background: props.backgroundColor,
        color: props.color,
        maxHeight: "190px",
        borderRadius: "5%",
        fontSize: "2rem",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        textAlign: "center",

  
    };
    if (window.innerWidth <= 768) {
      myButtonStyle.fontSize = '1.4rem';
    } 
    if (window.innerWidth <= 768) {
      myButtonStyle.fontSize = '1.4rem';
    } 

  return (
    <div style={myButtonStyle} className='myButton'>
        <p>{props.text}</p>
    </div>
  )
}

export default MainPageButton