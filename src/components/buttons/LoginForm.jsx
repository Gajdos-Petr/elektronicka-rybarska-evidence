import React from 'react'
import { useState } from 'react';
import FormStyle from '../../styles/modules/Form.module.css'
function LoginForm() {
  
const [userName, setUserName] = useState('');
const [userPassword, setUserPass] = useState('');

const  handleChange = (event) => {
  setUserName(event.target.value);
};

const  handleSubmit = (event) => {
  event.preventDefault();
  if(!userName || !userPassword){
    alert("Zadejte ID společně s heslem! ");
    return;  
  }
  console.log(userName,userPassword)
};
  return (
<>
<form onSubmit={handleSubmit} style={FormStyle.form}>
<label>ID člena:</label>
<input type="text" name="" id="" value={userName} onChange={handleChange}/>
<label>Heslo:</label>
<input type="password" name="" id="" value={userPassword} onChange={(e) => setUserPass(e.target.value)}/>
<button type="submit">Prihlasit se</button>
</form>

</>

    )
}

export default LoginForm