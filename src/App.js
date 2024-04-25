
import './App.css';
import React,{useState} from 'react';
import Header from './components/navBar/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUsSection from './components/mainPage/AboutUsSection';
import ContactSection from './components/mainPage/ContactSection';
import ListOfGrounds from './pages/ListOfGrounds'
import GroundInfo from './pages/GroundInfo'
import MemberDashboard from './pages/MemberDashboard'
import Page404 from './pages/Page404'
import Login from './pages/Login'
import { COLORS } from './styles/colors';
import { Route, Routes } from 'react-router-dom';
import FishingRules from './pages/FishingRules';



function App() {
  const [token, setToken] = useState();
  return (
    <>
        <Header />
        
        <Routes>
         <Route path='/'   element={<Home/>} /> {/*Domovská stránka*/}
         <Route path='/login' element={<Login/>} /> {/*Cesta na: Přihlášení*/}
         <Route path='/seznam-reviru'  element={<ListOfGrounds/>} /> {/*Cesta na: Stránka seznam revírů*/}
         <Route path='/rybarsky-rad'  element={<FishingRules/>} /> {/*Cesta na: Stránka rybářský řád*/}
         <Route path='/revir/:number' element={<GroundInfo/>} /> {/*Dynamicka cesta: pro informace o konkrétním revíru*/}
         <Route path='/dashboard' element={<MemberDashboard/>} /> {/*Cesta na: stránka přehled uživatele*/}
         <Route path="*" element={<Page404 />} /> {/*Chybová stránka 404*/}
       </Routes>

       <Footer />

    </>
  );
}

export default App;
