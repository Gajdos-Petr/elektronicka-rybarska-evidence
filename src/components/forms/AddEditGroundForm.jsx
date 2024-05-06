import React,{useId, useState, useEffect, useContext} from 'react'
import SectionTittle from '../SectionTittle';
import { COLORS } from '../../assets/colors/colors'
import data from '../../data/reviry.json'
import FormButton from '../buttons/FormButton';
import {EditItemContext} from '../../App';
function AddEditGroundForm() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({id: "", number: 0, name: "", type: "", organization: "", size: 0, desc: ""});

  const [edit, itemEd] = useContext(EditItemContext)

  useEffect(() => {
    if (edit !== null) {
      // Předat data z edit do formData
      setFormData({
        id: edit.id,
        number: edit.number,
        name: edit.name,
        type: edit.type,
        organization: edit.organization,
        size: edit.size,
        desc: edit.desc
      });
    }
  }, [edit]);
  useEffect(() => {
    setItems(data);
  }, []);
    const id = useId();
    
    const  handleSubmit = async (event) => {
      event.preventDefault();
if(edit !== null){
//je urpava
fetch('http://localhost:8000/grounds', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
.then(response => response.json())
alert("Uprava probehla uspesne!")

}else{
  fetch('http://localhost:8000/grounds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  

  alert("Revír byla úspěšně přidána!")
}
    }
    const deleteGround = (id) => {
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
    }
    const addItem = () =>{
    }
  return (
    <>
   <SectionTittle tittle={"Revíry"} backgroundColor = {COLORS.BACKGROUND_COLOR} textDecorationColor={COLORS.BOX_COLOR_LIGHT} color = {COLORS.TEXT_COLOR_BLACK}/>
   <section className='section-forms' >

    <div className='container-section' style={{display: 'flex', justifyContent: 'center', minHeight: '77vh'}}>

    <form onSubmit={handleSubmit} >
        <label htmlFor={id + "-number"}>Číslo revíru</label>
        <input type="text" name="number" id={id + "-number"} value={formData.number} onChange={e => setFormData({ ...formData, number: e.target.value })}/>

        <label htmlFor={id + "-name"}>Název revíru</label>
        <input type="text" name="name" id={id + "-name"} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}/>

        <label htmlFor={id + "-type"}>Typ revíru</label> 
        <select name="type" id={id + "-type"}>
          <option value="mpGround">Mimopstruhový</option>
          <option value="pGround">Pstruhový</option>
        </select>

        <label htmlFor={id + "-organization"}>Organizace</label>
        <input type="text" name="organization" id={id + "-organization"} value={formData.organization} onChange={e => setFormData({ ...formData, organization: e.target.value })}/>

        <label htmlFor={id + "-size"}>Velikost</label>
        <input type="number" name="size" id={id + "-size"} value={formData.size} onChange={e => setFormData({ ...formData, size: e.target.value })}/>

        <label htmlFor={id + "-desc"}>Popis</label>
        <textarea type="text" name="desc" id={id + "-desc"}  rows={5} cols={50} style={{border: "1px solid black"}} value={formData.desc} onChange={e => setFormData({ ...formData, desc: e.target.value })}/>
       {edit !== null ?  <FormButton text={"Upravit revír"} backColor={COLORS.BOX_COLOR_LIGHT}/> :  <FormButton text={"Vytvořit revír"} backColor={COLORS.BOX_COLOR_LIGHT}/>}

    </form>
    </div>
   </section>

    </>
  )
}

export default AddEditGroundForm