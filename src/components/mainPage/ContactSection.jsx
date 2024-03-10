import React from 'react'
import { COLORS } from '../../styles/colors'
import SectionTittle from '../SectionTittle'
import AboutUsBox from './AboutUsBox'
import icon from '../../images/logo192.png'

import '../../styles/ContactSection.css'

function ContactSection() {
  return (
    <section className='contact'>
    <SectionTittle tittle={"Kontakt"} backgroundColor = {COLORS.BACKGROUND_COLOR} textDecorationColor={COLORS.BOX_COLOR_LIGHT} color = {COLORS.TEXT_COLOR_BLACK}/>
    <div className='contact'>Pozdrav ze sekce kontakt!</div>
    <AboutUsBox iconUrl={icon} tittle={"Adresa"} text={"Praesent vitae arcu tempor neque lacinia pretium. Duis risus. Vivamus porttitor turpis ac leo. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla est. Duis viverra diam non justo. In convallis. Vestibulum fermentum tortor id mi. "}/>
    <AboutUsBox iconUrl={icon} tittle={"Vše na jednom místě"} text={"Praesent vitae arcu tempor neque lacinia pretium. Duis risus. Vivamus porttitor turpis ac leo. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla est. Duis viverra diam non justo. In convallis. Vestibulum fermentum tortor id mi. "}/>
     
     </section>
  )
}
export default ContactSection
