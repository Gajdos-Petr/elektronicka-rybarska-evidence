import React from 'react'

function Footer() {
  //styl komponenty
    const footerStyle ={
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "var(--box-color-dark)",
        color: "white",
        marginTop: "auto"
    }
    //JavaScript proměnná pro získání aktuálního roku
    const currentYear = new Date().getFullYear();
  return (
  <footer style={footerStyle}>
    {/*HTML výstup doplněný s hodnotou currentYear*/}
    <p>© {currentYear} RYBARSKY ELEKTRONICKY SYSTEM</p>
  </footer>
  )
}
export default Footer



