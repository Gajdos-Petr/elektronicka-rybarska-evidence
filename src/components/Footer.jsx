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
    const currentYear = new Date().getFullYear();
  return (
  <footer style={footerStyle}>
    <p>© {currentYear} RYBARSKY ELEKTRONICKY SYSTEM</p>
  </footer>
  )
}

export default Footer