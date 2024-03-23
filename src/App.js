import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import AboutUsSection from './components/mainPage/AboutUsSection';
import ContactSection from './components/mainPage/ContactSection';
import ListOfGrounds from './pages/ListOfGrounds'
import Login from './pages/Login'
import { COLORS } from './styles/colors';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='testovaci' style={ {backgroundColor: COLORS.BACKGROUND_COLOR}}>
        <NavBar />
        
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<AboutUsSection/>} />
         <Route path='/contact' element={<ContactSection/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/Grounds' element={<ListOfGrounds/>} />

       </Routes>

    </div>
  );
}

export default App;
