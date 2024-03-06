import React from 'react'
import AboutUsBoxStyle from '../../styles/modules/AboutUsBox.module.css'
function AboutUsBox(props) {
  return (
    <div className={AboutUsBoxStyle.box}>
        <div className={AboutUsBoxStyle.boxIcon}>
          <img src={props.iconUrl} alt="" />
        </div>
        <div className={AboutUsBoxStyle.boxTittle}>{props.tittle}</div>
        <div className={AboutUsBoxStyle.boxText}>{props.text}</div>
    </div>
  )
}

export default AboutUsBox