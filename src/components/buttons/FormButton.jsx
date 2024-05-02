import { fontFamily, fontSize } from '@mui/system'
import React from 'react'

function FormButton(props) {
const btnStyle ={
    backgroundColor: props.backColor,
    color: "white",
    border: "none",
    margin: "2rem 0 2rem 0",
    minHeight: "35px",
    textTransform: "uppercase",
    fontFamily: "var(--site-font-family)",
    fontSize: "1rem"
}

  return (
    <button type='submit' style={btnStyle}>{props.text}</button>
  )
}

export default FormButton