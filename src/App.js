import './App.css';
import NavBar from './components/navBar/NavBar';
import Footer from './components/Footer';
import HeroSection from './components/mainPage/HeroSection';
import AboutUsSection from './components/mainPage/AboutUsSection';
import ContactSection from './components/mainPage/ContactSection';
import { COLORS } from './styles/colors';

function App() {
  return (
    <div className='testovaci' style={ {backgroundColor: COLORS.BACKGROUND_COLOR}}>
      <NavBar />
      <HeroSection />
      <AboutUsSection />  
      <ContactSection />  
      <Footer />
    </div>
  );
}

export default App;
