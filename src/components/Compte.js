import { useEffect, useState } from 'react';
import '../css/box.css'
import React from 'react';
import { Chart as Chartjs } from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';
import {db} from './firebase-config'
import {collection, getDocs} from 'firebase/firestore'

const Compte = () => {
    const clientCollectionRef = collection(db, 'clientAsaph');

   
    const [data1, setData] = useState([])
    const [dat, setDat] = useState([])
    var sum = 0;

    useEffect(() =>{
        const getClient = async () => {
            const data = await getDocs(clientCollectionRef);
            setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            }
            getClient();
            //affichier le nombre des commande

            const getCount = async () => {
                const dat = await getDocs(clientCollectionRef);
                setDat(dat.size)
                }
                getCount();

                

      },[])

    return (
        <div className='home'>
        <div className='contener-box'>
                <div className='box'>
                    <p>{dat}<br/><span>Revenue</span></p>
                    <i className='fa-solid fa-bar-chart icon-1'></i>
                </div>
            </div>
            <div className='contener-box'>
                <div className='box'>
                    <p>{sum}<br/><span>Depense</span></p>
                    <i className='fas fa-wallet icon-1'></i>
                </div>
            </div><div className='contener-box'>
                <div className='box'>
                    <p>{dat}<br/><span>Chiffre d Affaire</span></p>
                    <i className='fas fa-wallet icon-1'></i>
                </div>
            </div>
            <div className='box-contain'>
                <div className='box-8'>
                    <div className='box-1'>
                        <p>Top Analyse en Coube</p>
                        <br/>
                        <Bar
                           data={{
                            labels: ["Janvier", "Frevier", "Mars"],
                            datasets :[
                                {
                                    label: "Revenue",
                                    data: data1.map((data) => data.prix_m),
                                },
                            ],
                           }}      
                        />
                    </div>
                
                </div>
            </div>
            <div className='box-contain-1'>
                <div className='box-4'>
                    <div className='box-1'>
                        <p >Totale en Begger</p>
                        <Doughnut 
                           data={{
                            labels: ["Janvier", "Frevier", "Mars"],
                            datasets :[
                                {
                                    label: "Revenue",
                                    data: data1.map((data) => data.prix_m),
                                },
                            ],
                           }}      
                        />
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Compte;
