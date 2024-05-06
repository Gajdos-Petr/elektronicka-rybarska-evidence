import './App.css';
import React,{useState, createContext} from 'react';
import Header from './components/navBar/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListOfGrounds from './pages/ListOfGrounds'
import GroundInfo from './pages/GroundInfo'
import Page404 from './pages/Page404'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom';
import FishingRules from './pages/FishingRules';
import PrivateRoute from './components/PrivateRoute';
export const UserContext = createContext();
export const EditItemContext = createContext();

function App() {
  const [user, setUser] = useState("");
  const [itemToEdit, setItemToEdit] = useState();
  return (
    <>
    <UserContext.Provider value={[user, setUser]}>
    <EditItemContext.Provider value={[itemToEdit, setItemToEdit]}>
    <Header />      
        
        <Routes>
         <Route path='/'   element={<Home/>} /> {/*Domovská stránka*/}
         <Route path='/login' element={<Login/>} /> {/*Cesta na: Přihlášení*/}
         <Route path='/seznam-reviru'  element={<ListOfGrounds/>} /> {/*Cesta na: Stránka seznam revírů*/}
         <Route path='/rybarsky-rad'  element={<FishingRules/>} /> {/*Cesta na: Stránka rybářský řád*/}
         <Route path='/revir/:number' element={<GroundInfo/>} /> {/*Dynamicka cesta: pro informace o konkrétním revíru*/}
         <Route path='/dashboard' element={<PrivateRoute pageToReturn= "dashboard" />}/> {/*Cesta na: stránka přehled uživatele*/}
         <Route path='/zaznam/:type' element={<PrivateRoute pageToReturn="zaznam" />}/> {/*Cesta na: stránka přehled uživatele*/}
         <Route path="*" element={<Page404 />} /> {/*Chybová stránka 404*/}
       </Routes>
       </EditItemContext.Provider>
       </UserContext.Provider>

       <Footer />

    </>
  );
}

export default App;
