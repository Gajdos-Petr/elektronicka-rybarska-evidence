import './App.css';
import NavBar from './components/navBar/NavBar';
import Footer from './components/Footer';
import { COLORS } from './styles/colors';

function App() {
  return (
    <div className='testovaci' style={ {backgroundColor: COLORS.BACKGROUND_COLOR}}>
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
