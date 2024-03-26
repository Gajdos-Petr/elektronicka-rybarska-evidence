import './App.css';
import Header from './components/navBar/Header';
import Home from './pages/Home';
import AboutUsSection from './components/mainPage/AboutUsSection';
import ContactSection from './components/mainPage/ContactSection';
import ListOfGrounds from './pages/ListOfGrounds'
import Page404 from './pages/Page404'
import Login from './pages/Login'
import { COLORS } from './styles/colors';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='testovaci' style={ {backgroundColor: COLORS.BACKGROUND_COLOR}}>
        <Header />
        
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<AboutUsSection/>} />
         <Route path='/contact' element={<ContactSection/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/Grounds' element={<ListOfGrounds/>} />
         <Route path="*" element={<Page404 />} />

       </Routes>

    </div>
  );
}

export default App;
