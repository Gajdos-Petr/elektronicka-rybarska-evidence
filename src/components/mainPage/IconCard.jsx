import React from 'react'
import AboutUsBoxStyle from '../../styles/modules/AboutUsBox.module.css'
import { Phone } from 'lucide-react';

function IconCard(props) {
  return (
    <div className={AboutUsBoxStyle.box}>
        <div className={AboutUsBoxStyle.boxIcon}>
          <div className={AboutUsBoxStyle.iconImage}>
        <Phone />
          </div>
        </div>
        <div className={AboutUsBoxStyle.boxTittle}>{props.tittle}</div>
        {props.text ?   <div className={AboutUsBoxStyle.boxText}>{props.text}</div> : null}
    </div>
  )
}

export default IconCard