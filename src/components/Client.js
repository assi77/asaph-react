import React from 'react'
import '../css/ListCommande.css'
import { useEffect } from 'react';
import { useState } from 'react';

//importation de redux
import { useSelector } from 'react-redux';

import Swal from 'sweetalert2'

import {db} from './firebase-config'
import {collection, getDocs, doc, deleteDoc} from 'firebase/firestore'




const Client = () => {
    const clientCollectionRef = collection(db, 'clientAsaph');
    const [data, setData] = useState([])

//afficher la list des clients recupere  dans redux
    const searchTerm = useSelector((state) => state.search);

 // Filtrage des éléments en fonction du terme de recherche
 const filteredItems = data.filter((data) =>
  data.nom.toLowerCase().includes(searchTerm.toLowerCase())
);
    useEffect(() =>{
        
            getClient();
      },[])

      const getClient = async () => {
        const data = await getDocs(clientCollectionRef);
        setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

      const suprimer = async (id)=>{
       
        Swal.fire({
            title: "Es-tu sûr?",
            text: "Vous ne pourrez pas revenir en arrière !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, suprimer-le !"
          }).then((result) => {
            if (result.isConfirmed) {
                try{
                    const clientDoc = doc(db, "clientAsaph", id)
                   deleteDoc(clientDoc)
                   getClient();
            }catch(err){
                console.log(err);
            }
            
              Swal.fire({
                title: "Deleted!",
                text: "le fichier a été suprimer.",
                icon: "success"
              });
             

            }
          });
       
                
      };
    
    return (
        <div className='home'>
        <div className='cadre1'>
        <div className='tTable'>
        <table>
        <thead>
                <tr>
                    <th>Date</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Numero</th>
                    <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {filteredItems.map((d, i) => (
                <tr key={i}>
                <td>{d.date} </td>
                <td>{d.nom}</td>
                <td>{d.prenom}</td>
                <td>{d.tel}</td>
                <td><i onClick={e => suprimer(d.id)} className="fas fa-trash sup"></i></td>
            </tr>
            ))}
                

        </tbody>
        </table>
            
    </div>
    </div>
    </div>
    );
}

export default Client;


