
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
         <Route path='/'   element={<Home/>} />
         <Route path='/about' element={<AboutUsSection/>} />
         <Route path='/#contact' element={<ContactSection/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/seznam-reviru'  element={<ListOfGrounds/>} />
         <Route path='/rybarsky-rad'  element={<FishingRules/>} />

         <Route path='/revir/:number' element={<GroundInfo/>} />

         <Route path='/dashboard' element={<MemberDashboard/>} />

         <Route path="*" element={<Page404 />} />

       </Routes>
       <Footer />

    </>
  );
}

export default App;
