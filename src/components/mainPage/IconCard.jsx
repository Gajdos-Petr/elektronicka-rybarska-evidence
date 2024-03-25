import React from 'react'
import IconCardStyle from '../../styles/modules/IconCard.module.css'

function IconCard({icon, other, contextAlign }) {
  const IconComponent = icon.iconComponent;
  const boxStyle = {
    alignItems: contextAlign || 'left'
  };
  return (
    <div className={IconCardStyle.box} style={boxStyle}>
        <div className={IconCardStyle.boxIcon}>
          <div className={IconCardStyle.iconImage}>
          <IconComponent size={icon.size} />
          </div>
        </div>
        <div className={IconCardStyle.boxTittle}>{other.tittle}</div>
        {other.text ?   <div className={IconCardStyle.boxText}>{other.text}</div> : null}
    </div>
  )
}

export default IconCard