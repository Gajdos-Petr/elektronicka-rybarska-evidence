import React, {useContext} from 'react'
import ButtonStyle from '../../assets/styles/modules/button.module.css'
import { UserContext } from '../../App';
function LoginButton(props) {
  const [user, setUser] = useContext(UserContext);

  

  return (
        <button className={ButtonStyle.loginButton} style={{ background: props.background}} onClick={props.handleClick}>
          {props.content}
        </button>

  )
}

export default LoginButton