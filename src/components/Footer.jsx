import React from 'react'

function Footer() {
    const footerStyle ={
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "var(--box-color-light)",
        color: "white",
        bottom: 0,
    }
  return (
  <footer style={footerStyle}>
    <p>© 2024 RYBARSKY ELEKTRONICKY SYSTEM</p>
  </footer>
  )
}

export default Footer