import React from 'react'

function MainPageButton(props) {
    const myButtonStyle = {
        background: props.backgroundColor,
        color: props.color,
        width: "200px",
        height: "215px",
        borderRadius: "10%",
        fontSize: "40px",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        textAlign: "center"
    };

  return (
    <div style={myButtonStyle} className='myButton'>
        <p>{props.text}</p>
    </div>
  )
}

export default MainPageButton