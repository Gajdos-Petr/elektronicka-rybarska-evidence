import React from 'react'
import { COLORS } from '../../styles/colors'
import SectionTittle from '../SectionTittle'
import '../../styles/ContactSection.css'

function ContactSection() {
  return (
    <section className='contact'>
    <SectionTittle tittle={"Kontakt"} backgroundColor = {COLORS.BACKGROUND_COLOR} textDecorationColor={COLORS.BOX_COLOR_LIGHT} color = {COLORS.TEXT_COLOR_BLACK}/>
    <div className='contact'>Pozdrav ze sekce kontakt!</div>
     
     </section>
  )
}
export default ContactSection
