import React from 'react'
import ButtonStyle from '../../styles/button.module.css'
import { Link } from "react-router-dom";

function LoginButton(props) {
  return (
    <Link to={props.url}>
        <button className={ButtonStyle.loginButton} style={{ background: props.background }}>{props.content}</button>
    </Link>

  )
}

export default LoginButton