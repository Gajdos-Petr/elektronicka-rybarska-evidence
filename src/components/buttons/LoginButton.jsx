import React from 'react'
import ButtonStyle from '../../styles/button.module.css'

function LoginButton(props) {
  return (
    <div>
        <button className={ButtonStyle.loginButton} style={{ background: props.background }}>PŘIHLASIT SE</button>
    </div>
  )
}

export default LoginButton