import React,{useContext, useState, useEffect} from 'react'
import UserInfoBar from '../components/userDashboard/UserInfoBar'
import '../assets/styles/MemberDashboard.css'
import SectionTittle from '../components/SectionTittle'
import UserTopMenu from '../components/userDashboard/UserTopMenu'
import { COLORS } from '../assets/colors/colors';
import { UserContext } from '../App'

import {EditItemContext} from '../App'



function MemberDashboard() {
  const [user, setUser] = useContext(UserContext)

    const[isAdmin, setIsAdmin] = useState();
    const [loadedUser, setLoadedUser] = useState([]);
    const [itemEdit, setItemEdit] = useContext(EditItemContext);
  
    useEffect(() => {
      fetch(`http://localhost:8000/members/${user}`)
        .then(res => res.json())
        .then((data) => {
          setLoadedUser(data);
          data.role === 'admin' ? setIsAdmin(1) : setIsAdmin(0)

        })
        .catch((error) => {
          console.error('Chyba při načítání informací o členu:', error);
        });
    }, [user]);
    const allNeeded = loadedUser.stamp === 'Zaplacena';
    return (
  <section className='dashboard-section'>
  <SectionTittle tittle={"Uživatelská správa"} backgroundColor = {COLORS.BACKGROUND_COLOR} textDecorationColor={COLORS.BOX_COLOR_LIGHT} color = {COLORS.TEXT_COLOR_BLACK}/>
    <div className="container-section member-deshboard-container">
      <div className='conainer-data left'>

      {loadedUser && <UserInfoBar user={loadedUser}/>}
      </div>
      <div className='container-action'>
   <UserTopMenu admin={isAdmin} canDoVisit={allNeeded}/>
      </div>
    </div>
    </section>

  )
} 

export default MemberDashboard