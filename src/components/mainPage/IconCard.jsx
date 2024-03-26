import React from 'react'
import IconCardStyle from '../../styles/modules/IconCard.module.css'

function IconCard({icon, other, contextAlign, boxDirection}) {
  const IconComponent = icon.iconComponent;
  const boxStyle = {
    alignItems: contextAlign || 'left',
    flexDirection: boxDirection || 'column' 
  };
  return (
    <div className={IconCardStyle.box} style={boxStyle}>
        <div className={IconCardStyle.boxIcon}>
          <div className={IconCardStyle.iconImage}>
          <IconComponent size={icon.size} color={icon.color}  />
          </div>
        </div>
     <div className={IconCardStyle.content}>
     <div className={IconCardStyle.boxTittle}>{other.tittle}</div>
        {other.text ?   <div className={IconCardStyle.boxText}>{other.text}</div> : null}
     </div>
    </div>
  )
}

export default IconCard