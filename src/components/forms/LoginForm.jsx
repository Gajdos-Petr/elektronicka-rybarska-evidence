import React,{ useState, useId, useContext } from 'react'
import FormStyle from '../../assets/styles/modules/Form.module.css'
import SimpleButton from '../buttons/SimpleButton'; 
import '../../assets/styles/table.css'
import { COLORS } from '../../assets/colors/colors';
import { UserContext } from '../../App';

import { useNavigate  } from "react-router-dom";

function LoginForm() {

  const inputId = useId();
  const [user, setUser] = useContext(UserContext)
  const [formData, setFormData] = useState({id: "", password: ""});
  const [loadedLogin, setLoadedLogin] = useState()
  const [errorInput, setErrorInput] = useState(null);
  const  handleChange = (event) => {
  const {name, value} = event.target;
  setFormData((prevFormData) => ({...prevFormData, [name]: value}));
}
const  handleSubmit = async (event) => {
  event.preventDefault();
  if(formData.id.length == 0 || formData.password.length == 0){
    setErrorInput("Vsechny vstupy musi byt vyplneny")
  }else{
    const response = await fetch(`http://localhost:8000/logins/${formData.id}`);
      if (!response.ok) {
        throw new Error('Přihlášení nebylo nalezeno.');
      }
      const data = await response.json();
      setLoadedLogin(data);

   if(data.id === formData.id && data.password === formData.password){
    setUser(formData.id)
    goToDashboard()
   }else{
    throw new Error('Nesprávné heslo.');
   }
  }

}

const bottomFormStyle = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "1rem"
}

const navigate = useNavigate();
const goToDashboard = () =>{
navigate('/dashboard');
}

  return (
<>

<form onSubmit={handleSubmit} style={FormStyle.form}>

<label htmlFor={inputId + '-userId'}>ID člena:</label>
<input type="text" name='id'  id={inputId + '-userId'} value={formData.id} onChange={handleChange}/>

<label htmlFor={inputId + '-userPassword'}>Heslo:</label>
<input type="password" name="password" id={inputId + '-userPassword'}  value={formData.password} onChange={handleChange}/>
{errorInput && <div style={{ color: 'red' }}>{errorInput}</div>}
<div className='login-form-bottom' style={bottomFormStyle}>
<SimpleButton background={COLORS.BOX_COLOR_LIGHT} content={"PŘIHLÁSIT SE"} />

</div>

</form>

</>

    )
}

export default LoginForm