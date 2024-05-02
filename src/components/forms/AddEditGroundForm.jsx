import React,{useId, useState, useEffect} from 'react'
import SectionTittle from '../SectionTittle';
import { COLORS } from '../../assets/colors/colors'
import data from '../../data/reviry.json'
import FormButton from '../buttons/FormButton';

function AddEditGroundForm() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({id: "", number: 0, name: "", type: "", organization: "", size: 0, desc: ""});

  useEffect(() => {
    setItems(data);
  }, []);
    const id = useId();
    
    const  handleSubmit = async (event) => {
      event.preventDefault();
        fetch('http://localhost:8000/visits', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        })
        .then(response => response.json())
        .then(user => console.log(user));
   
        alert("Docházka byla úspěšně přidána!")
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
        <input type="text" name="number" id={id + "-number"} />

        <label htmlFor={id + "-name"}>Název revíru</label>
        <input type="text" name="name" id={id + "-name"} />

        <label htmlFor={id + "-type"}>Typ revíru</label> 
        <select name="type" id={id + "-type"}>
          <option value="mpGround">Mimopstruhový</option>
          <option value="pGround">Pstruhový</option>
        </select>

        <label htmlFor={id + "-organization"}>Organizace</label>
        <input type="text" name="organization" id={id + "-organization"} />

        <label htmlFor={id + "-size"}>Velikost</label>
        <input type="number" name="size" id={id + "-size"}/>

        <label htmlFor={id + "-desc"}>Popis</label>
        <textarea type="text" name="desc" id={id + "-desc"}  rows={5} cols={50} style={{border: "1px solid black"}}/>
        <FormButton text={"Vytvořit revír"} backColor={COLORS.BOX_COLOR_LIGHT}/>

    </form>
    </div>
   </section>

    </>
  )
}

export default AddEditGroundForm