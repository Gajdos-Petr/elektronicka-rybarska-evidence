import React,{useId, useState,useContext} from 'react'
import SectionTittle from '../SectionTittle';
import { COLORS } from '../../assets/colors/colors'
import { UserContext } from '../../App';
import FormButton from '../buttons/FormButton';

function AddEditVisitForm() {
    const id = useId();
    const [user, setUser] = useContext(UserContext)
    const [caughtCount, setCaughtCount] = useState(0)
    const [formData, setFormData] = useState({memberId: user, date: "", number: 0, fishOneName: "", fishOneW: 0.0, fishOneL: 0, fishTwoName: "", fishTwoW: 0, fishTwoL: 0});

    const handleCountChange = e =>{
        const count = parseInt(e.target.value)
        setCaughtCount(count)
    }

    const  handleSubmit = async (event) => {
      event.preventDefault();
        fetch('http://localhost:8000/visits', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(user => console.log(user));
   
        alert("Docházka byla úspěšně přidána!")
    }




  return (

    <>
    <SectionTittle tittle={"Docházka"} backgroundColor = {COLORS.BACKGROUND_COLOR} textDecorationColor={COLORS.BOX_COLOR_LIGHT} color = {COLORS.TEXT_COLOR_BLACK}/>
      
   <section className='section-forms' >
   <div className='container-section' style={{display: 'flex', justifyContent: 'center', minHeight: '77vh'}}>
    
    <form onSubmit={handleSubmit} style={{width:"650px"}}>

        <label htmlFor={id + "-date"}>Datum</label>
        <input type="date" name="" id={id +"-date"} value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })}/>

        <label htmlFor={id + "-groundNumber"} >Číslo revíru</label>
        <input type="number" name="" id={id + "-groundNumber"}  value={formData.number} onChange={e => setFormData({ ...formData, number: parseInt(e.target.value) })}/>

        <label htmlFor={id + "-caughtCount"} >Počet úlovků</label>
        <select name="" id={id + "-caughtCount"} value={caughtCount} onChange={handleCountChange}>
        <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>

        <label htmlFor={id + "-fishOneName"}>Název ryby</label>
        <input type="text" name="fishOneName" id={id + "-fishOneName"} disabled={caughtCount === 0}  value={formData.fishOneName} onChange={e => setFormData({ ...formData, fishOneName: e.target.value })}/>

        <label htmlFor={id + "-fishOneSize"}>Váha [kg]</label>
        <input type="number" name="fishOneSize" step="0.01" id={id + "-fishOneSize"} disabled={caughtCount === 0} value={formData.fishOneW} onChange={e => setFormData({ ...formData, fishOneW: parseFloat(e.target.value) })} />

        <label htmlFor={id + "-fishOneWeight"}>Délka [cm]</label>
        <input type="number" name="fishOneWeight" min="10" max="100" id={id + "-fishOneWeight"} disabled={caughtCount === 0} value={formData.fishOneL} onChange={e => setFormData({ ...formData, fishOneL: parseInt(e.target.value) })}/>

        <label htmlFor={id + "-fishTwoName"}>Název ryby</label>
        <input type="text" name="fishTwoName" id={id + "-fishTwoName"} disabled={caughtCount !== 2} value={formData.fishTwoName} onChange={e => setFormData({ ...formData, fishTwoName: e.target.value })}/>

        <label htmlFor={id + "-fishTwoSize"}>Váha [kg]</label>
        <input type="number" name="fishTwoSize" step="0.01" id={id + "-fishTwoSize"} disabled={caughtCount !== 2} value={formData.fishTwoW} onChange={e => setFormData({ ...formData, fishTwoW: parseFloat(e.target.value) })}/>

        <label htmlFor={id + "-fishTwoWeight"}>Délka [cm]</label>
        <input type="number" name="fishTwoWeight" id={id + "-fishTwoWeight"} disabled={caughtCount !== 2} value={formData.fishTwoL} onChange={e => setFormData({ ...formData, fishTwoL: parseInt(e.target.value) })} />
        <FormButton text={"Vytvořit docházku"} backColor={COLORS.BOX_COLOR_LIGHT}/>
    </form>
    </div>
   </section>
</>
  )
}

export default AddEditVisitForm