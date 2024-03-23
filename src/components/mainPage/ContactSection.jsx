import React from 'react'
import { COLORS } from '../../styles/colors'
import IconCard from './IconCard'
import '../../styles/ContactSection.css'
import icon from '../../images/email.svg'
import SectionTittle from '../SectionTittle'
import '../../styles/ContactSection.css'
import { Phone } from 'lucide-react';

function ContactSection() {
  return (
    <section className='contact' id='contact'>
    <SectionTittle tittle={"Kontakt"} backgroundColor = {COLORS.BACKGROUND_COLOR} textDecorationColor={COLORS.BOX_COLOR_LIGHT} color = {COLORS.TEXT_COLOR_BLACK}/>
    <div className='contact-tittle'>Pozdrav ze sekce kontakt!</div>
    <div className="contact-conatiner">
    <IconCard icon={Phone} tittle={"Adresa"} text={"nám. Čs. legií 565, 530 02 Pardubice I"}/>
    <IconCard iconUrl={Phone} tittle={"Telefon"} text={"778 457 274"}/>
    <IconCard iconUrl={Phone} tittle={"Email"} text={"st64119@upce.cz"}/>
    
    </div>
     </section>
  )
}
export default ContactSection
