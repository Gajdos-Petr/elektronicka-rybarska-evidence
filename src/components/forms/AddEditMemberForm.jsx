import React,{useId, useState} from 'react'
import SectionTittle from '../SectionTittle';
import { COLORS } from '../../assets/colors/colors'
import FormButton from '../buttons/FormButton';

function AddEditMemberForm() {

    const id = useId();
    const [newLogin, setNewLogin] = useState({id: "", password: ""})

    const [formData, setFormData] = useState({id: newLogin.id, role: "regular", fName: "",lName: "", date: "", adress: "", organization: "", stamp: "Nezaplacena", jobs: "Nesplněny/Neuhrazeny", permit: "Žádná"});

   
    const  handleSubmit = async (event) => {
      //zjisti volne id
      //vytvor login
      event.preventDefault();

      fetch('http://localhost:8000/logins')
      .then(response => response.json())
      .then(data => {
        // Získání pole logins
        const logins = data;
   
        let maxId = 0;
        logins.forEach(login => {
          const id = parseInt(login.id);
          if (id > maxId) {
            maxId = id;
          }
        });
        maxId++;
        setNewLogin({ id: maxId, password: "Heslo" })
        formData.id =maxId.toString();
        fetch('http://localhost:8000/members', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        .then(response => response.json())
        fetch('http://localhost:8000/logins', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newLogin),
        })
        .then(response => response.json())
        alert(`Uživatel úspěšně přidám \n Id: ${newLogin.id}\nHeslo: ${newLogin.password}` )
      })
      
    }


  return (

    <>
   <SectionTittle tittle={"Členové"} backgroundColor = {COLORS.BACKGROUND_COLOR} textDecorationColor={COLORS.BOX_COLOR_LIGHT} color = {COLORS.TEXT_COLOR_BLACK}/>
   <section className='section-forms' >
        <div className='container-section' style={{display: 'flex', justifyContent: 'center', minHeight: '77vh'}}>
    <form onSubmit={handleSubmit} style={{width:"500px"}}>
        <label htmlFor={id + "-firstName"}>Jméno</label>
        <input type="text" name="" id={id +"-firstName"} value={formData.fName} onChange={e => setFormData({ ...formData, fName: e.target.value })}/>

        <label htmlFor={id + "-lastName"} >Příjmení</label>
        <input type="text" name="" id={id + "-lastName"} value={formData.lName} onChange={e => setFormData({ ...formData, lName: e.target.value })} />

        <label htmlFor={id + "-birthDay"}>Datum narození</label>
        <input type="date" name="" id={id +"-birthDay"} value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />

        <label htmlFor={id + "-address"}>Adresa</label>
        <input type="text" name="" id={id + "-address"} value={formData.adress} onChange={e => setFormData({ ...formData, adress: e.target.value })}/>

        <label htmlFor={id + "-organization"}>Organizace</label>
        <input type="text" name="" id={id + "-organization"} value={formData.organization} onChange={e => setFormData({ ...formData, organization: e.target.value })}/>

        <label htmlFor={id + "-role"} >Pozice v organizaci</label>
        <select name="" id={id + "-role"} >
        <option value="admin">Vedení</option>
          <option value="regular">Člen</option>
        </select>

        <label htmlFor={id + "-stamp"}>Známka</label>
        <select name="" id={id + "-stamp"}>
          <option value="stampPaid">Nezaplacená</option>
          <option value="stampUnpaid">Zaplacená</option>
        </select>
    
        <label htmlFor={id + "-jobs"} >Brigády</label>
        <select name="" id={id + "-jobs"}>
          <option value="jobsPaid">Nezaplacené</option>
          <option value="jobsUnpaid">Zaplacené</option>
        </select>

        
        <label htmlFor={id + "-permit"}>Povolenka</label>
        <select name="" id={id + "-permit"}>
          <option value="permitNone">Žádná</option>
          <option value="permitLocal">Krajská</option>
          <option value="permitAll">Celosvazová</option>

        </select>
        <FormButton text={"Přidat člena"} backColor={COLORS.BOX_COLOR_LIGHT}/>

    </form>
    </div>
    </section>

</>
  )
}

export default AddEditMemberForm