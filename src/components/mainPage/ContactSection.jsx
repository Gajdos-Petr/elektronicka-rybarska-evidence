import React from 'react'
import { COLORS } from '../../styles/colors'
import IconCard from './IconCard'
import '../../styles/ContactSection.css'
import SectionTittle from '../SectionTittle'
import '../../styles/ContactSection.css'
import { Phone, MapPin, Mail } from 'lucide-react';

function ContactSection() {
  const iconSize = 52
  return (
    <section className='contact' id='contact'>
    <SectionTittle tittle={"Kontakt"} backgroundColor = {COLORS.BACKGROUND_COLOR} textDecorationColor={COLORS.BOX_COLOR_LIGHT} color = {COLORS.TEXT_COLOR_BLACK}/>
    <div className="contact-conatiner">
    <div className='contact-tittle'>V případě nutnosti nás neváhejte kontaktovat!</div>
   <div className="contact-boxes">
   <IconCard
          icon={{
            iconComponent: MapPin,
            size: iconSize
          }}
          other={{
           tittle: "navštivte nás",
           text: "nám. Čs. legií 565, 530 02 Pardubice I"
          }}
          contextAlign="center"
    /> 
    <IconCard
          icon={{
            iconComponent: Phone,
            size: iconSize
          }}
          other={{
           tittle: "zavolejte nám",
           text: "778 457 274"
          }}
          contextAlign="center"
    />       
    <IconCard
          icon={{
            iconComponent: Mail,
            size: iconSize
          }}
          other={{
           tittle: "napište nám",
           text: "st64119@upce.cz"
          }}
          contextAlign="center"
          />  

   </div>
    </div>
     </section>
  )
}
export default ContactSection
