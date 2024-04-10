import React from 'react'
import UserInfoBar from '../components/userDashboard/UserInfoBar'
import BasicTable from '../components/BasicTable'
import LoginButton from '../components/buttons/LoginButton'
import '../styles/MemberDashboard.css'
import SectionTittle from '../components/SectionTittle'
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
      <div className='container-action-header'>
      <LoginButton background={COLORS.BOX_COLOR_LIGHT} url={"/Login"} content={"VYTVOŘIT DOCHÁZKU"}/>
      <p>bezny- jen dochazka, spravce - dochazka, clenovem, reviry</p>
      </div>
      <div className='container-action-body'>
      <BasicTable/>
      </div>
      </div>
    </div>
    </section>

  )
}

export default MemberDashboard