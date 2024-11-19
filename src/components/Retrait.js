import React, { useEffect, useState } from 'react';
import '../css/retrait.css'

import {db} from './firebase-config'
import {collection, getDocs, doc, deleteDoc} from 'firebase/firestore'

const Retrait = () => {
    const clientCollectionRef = collection(db, 'clientAsaph');

    const [tabs , setTabs] =useState(1);
    const toggleTabs = (index)=>{
    setTabs(index);
    }
    const [data, setData] = useState([])
    useEffect(() =>{
        const getClient = async () => {
            const data = await getDocs(clientCollectionRef);
            setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            }
            getClient();

      },[])

      const suprimer = async (id)=>{
        try{
              const clientDoc = doc(db, "clientAsaph", id)
                await deleteDoc(clientDoc)
                window.location.reload()
        }catch(err){
            console.log(err);
        }
                
      };
   
    return (
        <div className='home'>
            <div className='conteneurbox'>
                <div className='tabs'>
                  <h3 className={tabs=== 1 ? `active`: null}
                  onClick={()=>toggleTabs(1)}>Retrait en cours..</h3>
                  <h3 className={tabs=== 2 ? `active`: null}
                  onClick={()=>toggleTabs(2)}>Retrait valider</h3>
                </div>
                <div className='tabs-contener'>
                    <div className={tabs=== 1 ? `active`: 'div'} >
                        
                        {data.map((d , i) =>(
                            <div key={i} className='listname'>
                            <div className='div6'>
                                <div className='name'>
                                <div className='img'><img src='/assette/user.png' alt='user'/></div>
                                <div > 
                                    <p>{d.nom} {d.prenom} </p>
                                    <p>{d.date} </p>
                                </div>
                                </div>
                                <p>{d.tel} </p>
                                <div > 
                                    <p>L'Oeil droite</p>
                                    <p>{d.verre_d} </p>
                                </div>
                                <div > 
                                    <p>L'Oeil Gouche</p>
                                    <p>{d.verre_g} </p>
                                </div>
                                <p className='p1'>Traitement..</p>
                                <p><button >imprimer</button>
                                <button onClick={e => suprimer(d.id)} className='bouton'>Suprimer</button></p>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                        <div className={tabs=== 2 ? `active`: 'div'}>
                            
                            {data.map((d,i)=>(
                                <div key={i} className='listname'>
                    <div className='div6'>
                        <div className='name'>
                        <div className='img'><img src='/assette/user.png' alt='user'/></div>
                        <div > 
                            <p>{d.nom} {d.prenom}</p>
                            <p>{d.date}</p>
                        </div>
                        </div>
                        <p>{d.tel}</p>
                        <div > 
                            <p>L'Oeil droite</p>
                            <p>{d.verre_d} </p>
                        </div>
                        <div > 
                            <p>L'Oeil Gouche</p>
                            <p>{d.verre_g} </p>
                        </div>
                            <p className='p2'>succes..</p>
                            <p><button>imprimer</button>
                            <button onClick={e => suprimer(d.id)} className='bouton'>Suprimer</button></p>
                        </div>
                            </div>
                             )) }
                        </div>
                </div>
            </div>
            
        </div>
    );
}

export default Retrait;
