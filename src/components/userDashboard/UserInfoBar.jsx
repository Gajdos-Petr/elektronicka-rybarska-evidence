import React,{useState, useContext, useEffect} from 'react'
import '../../assets/styles/UserInfoBar.css'
import { UserContext } from '../../App';
function UserInfoBar({user}) {




  return (
    <div className='info-bar-container'>
      <div className='info-data'>
      <label htmlFor="number">ID člena</label>
    <b>{user.id}</b>
     <label htmlFor="number">Jméno</label>
     <b>{user.fName + " " + user.lName}</b>
     <label htmlFor="date">Datum narození</label>
     <b>{user.date}</b>
     <label htmlFor="number">Adresa</label>
     <b>{user.adress}</b>
     <label htmlFor="number">Organizace</label>
     <b>{user.organization}</b>
     <label htmlFor="number">Známka</label>
    <b>{user.stamp}</b>
     <label htmlFor="number">Brigády</label>
     <b>{user.jobs}</b>
     <label htmlFor="number">Povolenka</label>
     <b>{user.permit}</b>
      </div>

    </div>
  )
}

export default UserInfoBar