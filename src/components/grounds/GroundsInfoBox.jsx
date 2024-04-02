import React from 'react'
import InfoBoxItem from './InfoBoxItem'
import InfoBoxStyle from '../../styles/modules/InfoBox.module.css'

function GroundsInfoBox({objectToShow}) {
  
return (
<div className={InfoBoxStyle.infoBox}>
<InfoBoxItem tittle= "Číslo" text={objectToShow.number}/>
<InfoBoxItem tittle= "Název" text={objectToShow.name}/>
<InfoBoxItem tittle= "Typ" text={objectToShow.type}/>
<InfoBoxItem tittle= "Organizace" text={objectToShow.organization}/>
<InfoBoxItem tittle= "Rozloha" text={`${objectToShow.size} ha`}/>
  </div>

  )
}

export default GroundsInfoBox