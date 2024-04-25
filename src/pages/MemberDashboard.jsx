import React from 'react'
import UserInfoBar from '../components/userDashboard/UserInfoBar'
import '../styles/MemberDashboard.css'
import SectionTittle from '../components/SectionTittle'
import UserTopMenu from '../components/userDashboard/UserTopMenu'
import { COLORS } from '../styles/colors';

function MemberDashboard() {


  return (
    <section className='dashboard-section'>
   <SectionTittle tittle={"Uživatelská"} backgroundColor = {COLORS.BACKGROUND_COLOR} textDecorationColor={COLORS.BOX_COLOR_LIGHT} color = {COLORS.TEXT_COLOR_BLACK}/>
    <div className="container-section member-deshboard-container">
      <div className='conainer-data left'>
      <UserInfoBar/>
      </div>
      <div className='container-action'>
      <UserTopMenu/>
      </div>
    </div>
    </section>

  )
}

export default MemberDashboard