import React from 'react';
import '../css/box.css'
import { useEffect, useState } from 'react';
import {db} from './firebase-config'
import {collection, getDocs} from 'firebase/firestore'
import Depense from './Depense';

const Box = () => {
    const clientCollectionRef = collection(db, 'clientAsaph');
    

    
    const [data, setData] = useState([])
    

    useEffect(() =>{
        
        const getClient = async () => {
            const data = await getDocs(clientCollectionRef);
            setData(data.size)
            }
            getClient();

      },[])

    return (
        <div className='home'>
            <div className='contener-box'>
                <div className='box'>
                    <p>{data}<br/><span>Commandes</span></p>
                    <i className='fa-solid fa-users icon-1'></i>
                </div>
            </div>
            <div className='contener-box'>
                <div className='box'>
                    <p>{data} <br/><span>Retraits en cours</span></p>
                    <i className='fa-solid fa-bar-chart icon-1'></i>
                </div>
            </div><div className='contener-box'>
                <div className='box'>
               
                    <p><Depense /><br/><span>Commade Valider</span></p>
                    <i className='fas fa-wallet icon-1'></i>
                </div>
            </div>
            <br/>
            <br/>

            <div className='box-contain'>
                <div className='box-8'>
                    <div className='box-1'>
                        <p>Top Montures et Verres</p>
                        <br/>
                        <table>
                            <tr>
                                <th>designation</th>
                                <th>categories</th>
                                <th>photo</th> 
                            </tr>
                            <tr>
                                <td>monture</td>
                                <td>ronde</td>
                                <td><img src="/assette/ronde.WEBP" alt="logo" /></td>
                            </tr>
                            <tr>
                            <td>monture</td>
                            <td>arrondi</td>
                            <td><img src="/assette/arrondi.WEBP" alt="logo" /></td>
                        </tr>
                        <tr>
                            <td>monture</td>
                            <td>carre</td>
                            <td><img src="/assette/carre.PNG" alt="logo" /></td>
                        </tr>
                    </table>
                </div>
                </div>
            </div>
            <div className='box-contain-1'>
                <div className='box-4'>
                    <div className='box-1'>
                        <p>Totale Revenu en pourcentage</p>
                        
                        <div className='circle-wrap'>
                            <div className='circle'>
                                <div className='mask full'>
                                    <div className='fill'></div>
                                </div>
                                <div className='mask half'>
                                    <div className='fill'></div>
                                </div>
                                <div className='inside-circle'>70%</div>
                            </div>
                        </div>
        
                </div>
            </div>
            </div>

        </div>
    );
}

export default Box;
