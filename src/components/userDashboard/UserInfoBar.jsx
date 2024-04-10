import React from 'react'
import '../../styles/UserInfoBar.css'
function UserInfoBar() {
  return (
    <div className='info-bar-container'>
      <div className='info-data'>
      <label htmlFor="number">ID člena</label>
    <b>441</b>
     <label htmlFor="number">Jméno</label>
     <b>Petr Gajdoš</b>
     <label htmlFor="number">Adresa</label>
     <b>Nazaret 1754 Čáslav, 28601 Čáslav</b>
     <label htmlFor="number">Organizace</label>
     <b>MO Malešov</b>
     <label htmlFor="number">Známka</label>
    <b>Zaplacena</b>
     <label htmlFor="number">Brigády</label>
     <b>Splněny/Uhrazeny</b>
     <label htmlFor="number">Povolenka</label>
     <b>Krajská</b>
      </div>
    </div>
  )
}

export default UserInfoBar