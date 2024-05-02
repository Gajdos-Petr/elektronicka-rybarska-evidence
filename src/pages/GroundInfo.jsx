import React, {useEffect, useState} from 'react'
import GroundsInfoBox from '../components/grounds/GroundsInfoBox'
import SectionTittle from '../components/SectionTittle'
import { COLORS } from '../assets/colors/colors';
import '../assets/styles/GroundInfo.css'
import { useParams } from 'react-router-dom';
import REVIRY_DATA from '../data/reviry.json'


function GroundInfo() {
  const [foundedObject, setFoundedObject] = useState();
const {number} = useParams();

useEffect(() => {
  fetch(`http://localhost:8000/grounds/${number}`)
    .then(res => res.json())
    .then((data) => {
      setFoundedObject(data);
    })
    .catch((error) => {
      console.error('Chyba při načítání informací o členu:', error);
    });
}, [number]);
const descriptionParts = foundedObject ? foundedObject.desc.split(';').map(part => part.trim()) : [];
const descriptionElements = descriptionParts.map((part, index) => <p key={index}>{part}</p>);

  return (
    <section className='ground-wrapper'>
      <div className='container-section ground-container'>
    {foundedObject &&<GroundsInfoBox objectToShow={foundedObject}/>}
    <div className="ground-description">
    <SectionTittle tittle={"Popis revíru"} backgroundColor = {COLORS.BACKGROUND_COLOR} textDecorationColor={COLORS.BOX_COLOR_LIGHT} color = {COLORS.TEXT_COLOR_BLACK}/>
      <p>{descriptionElements}</p>
    </div>
    </div>
    </section>
  )
}

export default GroundInfo