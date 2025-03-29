import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import HomePage from '../pages/HomePage';
import Directory from '../pages/Directory';
import About from '../pages/About';
import News from '../pages/News';
import Footer from '../components/Footer';
import ProviderDetails from '../pages/ProviderDetails';
import JoinTheTeam from '../pages/JoinTheTeam';
import UpdateProviderInfo from '../pages/UpdateProviderInfo';



function App() {


  return (
    <div >
      <NavBar />
      
      {/* <div className="font-cormorant">
      This text should use Cormorant Garamond
      </div> */}
     <div>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/directory/:id" element={<ProviderDetails />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/joinus" element={<JoinTheTeam />} />
        <Route path="/news" element={<News />} />
        <Route path="/updateproviderinfo/:id" element={<UpdateProviderInfo />} />
        
      </Routes>

     </div>

     <Footer />
      
    </div>
  );
}

export default App
