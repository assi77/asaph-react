import React, { useState } from 'react';
import { NavLink }from 'react-router-dom';
import '../css/menue.css'

//connecte la bar de recherche creee avec redux

import { useDispatch } from 'react-redux';
import { setSearchTerm } from './redux/SearchSlice';


const Menue = ({theme , setTheme, close , setClose}) => {

     const dispatch = useDispatch();
    
    const handleSearchChange = (e) => {
        dispatch(setSearchTerm(e.target.value)); // Met à jour l'état Redux avec la saisie
      };
    
    const toggle =()=>{
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }
    const [angle , setAngle] = useState(false);
    const Angle = ()=>{
       setAngle(!angle);
    }
   
    
    return (
        
        <nav className= {` sidebar ${!close ? `close` : null}`}>
        <header>
            <div className="image-text">
                <span className="image">
                    <img src="/asaph.png" alt="logo" />
                </span>
                <div className="text header-text">
                    <span className="name">Asaph</span>
                    <span className="profession">Optic</span>

                </div>
            </div>
            <i className="fa-solid fa-chevron-right toggle" onClick={()=>setClose(!close)}></i>
        </header>
        <div className="menu-bar">
            <div class="menu">
                <li class="search-box">
                        <i class="fa-solid fa-search icon"></i>
                        <input type="search" placeholder="Search..." onChange={handleSearchChange} />
                </li>
                <ul class="menu-links">
                    <li class="nav-link">
                        <NavLink to='/'>
                            <i className="fa-solid fa-home icon"></i>
                            <span className="text nav-text">Accueil</span>
                        </NavLink>
                    </li>
                    <li class="nav-link ">
                        <NavLink  onClick={()=>{Angle()}} >
                            <i className="fa-solid fa-users icon"></i>
                            <span className="text nav-text">Clients</span>
                            <i className={` fa-solid fa-angle-right icone ${angle ? `angle` : null}`} ></i>
                        </NavLink>
                    </li>
                <div className={` drop ${angle ? `angle` : null}`}>
                    <li class="nav-link">
                            <NavLink  exact to='/commande'>
                                <i className="fa-solid fa-user icon"></i>
                                <span className="text nav-text">Ajouter Commande</span>
                            </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/client'>
                        <i className="fa-solid fa-users icon"></i>
                        <span className="text nav-text">Commandes</span>
                    </NavLink>
                    </li>
                </div>
                    <li class="nav-link">
                        <NavLink exact to='/retrait'>
                            <i className="fa-solid fa-bar-chart icon"></i>
                            <span className="text nav-text">Retrait</span>
                        </NavLink>
                    </li>
                    <li class="nav-link">
                        <NavLink exact to='/compte'>
                            <i className="fa-solid fa-wallet icon"></i>
                            <span className="text nav-text">Compte</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div class="bottom-content">
                <li class="">
                    <NavLink>
                        <i className="fa-solid fa-power-off icon"></i>
                        <span className="text nav-text">log out</span>
                    </NavLink>
                </li>
                <li className="mode">
                    <div className="moon-sun">
                        <i className="fa-solid fa-moon icon moon"></i>
                        <i className="fa-solid fa-sun icon sun"></i>
                    </div>
                    <span className="mode-text text">Dark mode</span>
                    <div className="toggle-switch" onClick={()=>{toggle()}}>
                        <span className="switch"></span>
                    </div>
                </li>       
            </div>
        </div>
        </nav>
    );
}

export default Menue;

