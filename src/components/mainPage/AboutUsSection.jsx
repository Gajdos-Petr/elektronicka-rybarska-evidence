import React from 'react'
import '../../assets/styles/AboutUsSection.css'
import SectionTittle from '../SectionTittle'
import IconCard from './IconCard'

import {  Layers, Rabbit } from 'lucide-react';

import { COLORS } from '../../assets/colors/colors'

function AboutUsSection() {
  return (
    <section className='aboutUs' id='aboutUs'>
      <SectionTittle tittle={"O nás"} backgroundColor = {COLORS.BACKGROUND_COLOR} textDecorationColor={COLORS.BOX_COLOR_LIGHT} color = {COLORS.TEXT_COLOR_BLACK}/>
        <div className='container-section about-us-conatiner'>
        <div className='about-tittle'>Poskytujeme rybářům jednoduchou a hlavně spolehlivou evidenci jejich rybářských výprav.</div>
        <div className='about-first-text'>Etiam egestas wisi a erat. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Suspendisse nisl. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Mauris tincidunt sem sed arcu. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Phasellus et lorem id felis nonummy placerat. Pellentesque pretium lectus id turpis. </div>
        <div className='inner-container-boxes'>
          <div className='inner-left'>
          <IconCard
          icon={{
            iconComponent: Layers,
            size: 64,
            color: COLORS.BOX_COLOR_LIGHT
          }}
          other={{
           tittle: "Vše na jednom místě",
           text: "Praesent vitae arcu tempor neque lacinia pretium. Duis risus. Vivamus porttitor turpis ac leo. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla est. Duis viverra diam non justo. In convallis. Vestibulum fermentum tortor id mi. "
          }}
          />  
        </div>
          <div className='inner-right'>
          <IconCard
          icon={{
            iconComponent: Rabbit,
            size: 64,
            color: COLORS.BOX_COLOR_LIGHT
          }}
          other={{
           tittle: "Velká přehlednost",
           text: "tPraesent vitae arcu tempor neque lacinia pretium. Duis risus. Vivamus porttitor turpis ac leo. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Nulla est. Duis viverra diam non justo. In convallis. Vestibulum fermentum tortor id mi. "
          }}
          />  
            </div>
        </div>

        </div>
    </section>
  )
}

export default AboutUsSection