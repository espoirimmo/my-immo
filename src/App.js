import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Proprietaire from './components/Proprietaire';
import Locataire from './components/Locataire';
import Location from './components/Location';
import Paiement from './components/Paiement';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        < Route path="/locataire" element={<Locataire  />}/>
        <Route path="/proprietaire" element={<Proprietaire />} />
        <Route path="/location" element={<Location />} />
        <Route path="/paiement" element={<Paiement />} />
        
      </Routes>
   
    </Router>

  
  );
}

export default App;