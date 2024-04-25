import React from 'react'

import InfoBoxStyle from '../../styles/modules/InfoBox.module.css'
function InfoBoxItem(props) {

  return (
    <div className={InfoBoxStyle.infoBoxItem}>
        <p className={InfoBoxStyle.infoBoxItemTittle}>{props.tittle}</p>
        <p className={InfoBoxStyle.infoBoxItemText}>{props.text}</p>
    </div>
    )
}
export default InfoBoxItem

