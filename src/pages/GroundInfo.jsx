import React, {useEffect, useState} from 'react'
import GroundsInfoBox from '../components/grounds/GroundsInfoBox'
import SectionTittle from '../components/SectionTittle'
import { COLORS } from '../styles/colors';
import '../styles/GroundInfo.css'
import { useParams } from 'react-router-dom';
import REVIRY_DATA from '../sources/reviry.json'


function GroundInfo() {
const {number} = useParams();
console.log(number);
const foundedObject = REVIRY_DATA.find(obj => obj.number === parseInt(number));
console.log(foundedObject);
const descriptionParts = foundedObject.desc.split(';').map(part => part.trim());
const descriptionElements = descriptionParts.map((part, index) => <p key={index}>{part}</p>);


  return (
    <section className='ground-wrapper'>
      <div className='container-section ground-container'>
    <GroundsInfoBox objectToShow={foundedObject}/>
    <div className="ground-description">
    <SectionTittle tittle={"Popis revíru"} backgroundColor = {COLORS.BACKGROUND_COLOR} textDecorationColor={COLORS.BOX_COLOR_LIGHT} color = {COLORS.TEXT_COLOR_BLACK}/>
      <p>{descriptionElements}</p>
    </div>
    </div>
    </section>
  )
}

export default GroundInfo