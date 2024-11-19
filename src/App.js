
import React from 'react';
import './css/app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menue from './components/Menue';
import { useState } from 'react';
import { useEffect } from 'react';
import Box from './components/Box';
import Command from './components/Command';
import Client from './components/Client';
import Retrait from './components/Retrait';
import Compte from './components/Compte';

import { Provider } from 'react-redux';
import store from './components/redux/store';

const App = () => {
  const current1 = localStorage.getItem('current1')

  const current2 = localStorage.getItem('current2')

  const [theme, setTheme] = useState( current1 ? current1 :'light');

  const [close, setClose] = useState( current2 ? current2 :'close');
  useEffect ( ()=>{
    localStorage.setItem('current1', theme);

    localStorage.setItem('current2', close);
  },[theme, close])



  return (
    <div className={`conteneur ${theme} ${close}`}>
      <Provider   store={store}>

      <Router>
        <Menue  theme={theme} setTheme={setTheme} close={close} setClose={setClose}/>
          <Routes>
               <Route path="/" element={<Box />} /> 
               <Route path="/commande" element={<Command />} /> 
               <Route path="/client" element={<Client/>} /> 
               <Route path="/retrait" element={<Retrait/>} />  
               <Route path="/compte" element={<Compte/>} />  
                
          </Routes>
        </Router>

      </Provider>
      
  
      </div>
  
  );
}

export default App;
