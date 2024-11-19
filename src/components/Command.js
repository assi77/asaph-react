import React, { useState } from 'react';
import '../css/commande.css'
import Validation from './Validation';
import { useNavigate } from "react-router-dom";
import {db} from './firebase-config'
import {collection, addDoc } from 'firebase/firestore'
import Swal from 'sweetalert2'


const Command = () => {
    let count = [];
   for(let i = 0; i<=18; i++) {
    count.push(i*10);
   }
   const initValue = {
   
    nom : "",
    prenomnom : "",
    date : "",
    quartier : "",
    tel: "",

    degre_d:"",
    verre_d:"",

    degre_g:"",
    verre_g:"",

    prix_m: "",
    prix_av:""

   }
   const usersCollectionRef = collection(db, 'clientAsaph');

    const [value, setValue]=useState(initValue)

    const [nom, setNom]=useState('')
    const [prenom, setPrenom]=useState('')
    const [tel, setTel]=useState('')
    const [quartier, setQuartier]=useState('')
    const [date, setDate]=useState('')

    const [verre_d, setVerre_d]=useState('')
    const [verre_g, setVerre_g]=useState('')

    const [degre_d, setDegre_d]=useState('')
    const [degre_g, setDegre_g]=useState('')

    const [prix_m, setPrix_m]=useState('')
    const [prix_av, setPrix_av]=useState('')







    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const addUsers = async () =>{
        await addDoc (usersCollectionRef, {
            nom : nom, 
            prenom : prenom,
            quartier : quartier,
            date : date,
            tel : tel,
            
            degre_d : degre_d,
            degre_g : degre_g,
           
            verre_d : verre_d,
            verre_g : verre_g,
            prix_m : prix_m,
            prix_av : prix_av

         })
     }
  

    const handleSubmit = (e) =>{
        
        setErrors(Validation(value));
        if(Object.keys(Validation).length === 0){
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
           navigate("/client");
            addUsers();
        
        }
        
    }
    return (
        <div className='home'>
            <div className='containe'>
                <form action='' onSubmit={handleSubmit}>
                <div class="details personal">
						<span class="title">Idendifiant du clients</span>
                    <div className='fields'>
                        <div className="input">
                            <label>Nom</label>
                            <input type="texte" name="nom"  placeholder="Entrez le nom" onChange={(e) => {setNom(e.target.value);}} />
                            {errors.nom && <span className='errors'>{errors.nom} </span> }
                        </div>
                        <div className="input">
                            <label>Prenom</label>
                            <input type="texte" name="prenom" placeholder="Entrez le prenom"  onChange={(e) => {setPrenom(e.target.value);}}/>
                            {errors.prenom && <span className='errors'>{errors.prenom} </span> }
                        </div>
                        <div className="input">
                            <label>Numero de Telephone</label>
                            <input type="texte" name="tel" placeholder="Entrez le Numero"  onChange={(e) => {setTel(e.target.value);}}/>
                            {errors.tel && <span className='errors'>{errors.tel} </span> }
                        </div>
                        
                        <div className="input">
                            <label>Quartier</label>
                            <input type="texte" name="quartier" placeholder="Entrez le Nom du Quartier"  onChange={(e) => {setQuartier(e.target.value);}}/>
                            {errors.quartier && <span className='errors'>{errors.quartier} </span> }
                        </div>
                        <div className="input">
                            <label>la Date de Commande</label>
                            <input type="date" name="date"   onChange={(e) => {setDate(e.target.value);}}/>
                            {errors.date && <span className='errors'>{errors.date} </span> }
                        </div>
                        
                    </div>
                    <span class="title">Detaille des Montures</span>

                        <div className='detail-monture'>
                            <div className='droite'>
                                 <h2>L' OEIL DROITE</h2>

                                    <div className='group1'>
                                        <div className="select">
                                            <label> * Degré * </label>
                                            
                                            <select name="degre_d"  onChange={(e) => {setDegre_d(e.target.value);}} >
                                                 {count.map((counts) =>(
                                                 <option key= {counts} value={counts}>{counts} ¤</option>
                                                   ))}
                                            </select>
                                             {errors.degre_d && <span className='errors'>{errors.degre_d} </span> }
                                        </div>
                                        
                                        <div className="select">
                                            <label> * types de verres * </label>
                                            <select name='verre_d'   onChange={(e) => {setVerre_d(e.target.value);}}>
                                                <option value='simple foyers'> simple foyers</option>
                                                <option value='double foyers'>double foyers</option>
                                                <option value='progressifs'>progrissifs</option>
                                                <option value='varilux phisio'>varilux phisio</option>
                                            </select><br/> 
                                            {errors.verre_d && <span className='errors'>{errors.verre_d} </span> }        
                                        </div>
                                        
                                    </div>
                            
                            </div>
                            <div className='gauche'>
                                <h2>L' OEIL GAUCHE</h2>
                                    
                                    <div className='group1'>

                                        <div className="select">
                                                <label> * Degré * </label>
                                                <select name="degre_g"  onChange={(e) => {setDegre_g(e.target.value);}} >
                                                 {count.map((counts) =>(
                                                 <option key= {counts} value={counts}>{counts} ¤</option>
                                                   ))}
                                            </select>
                                                 {errors.degre_g && <span className='errors'>{errors.degre_g} </span> }
                                            </div>
                        
                                            <div className="select">
                                                <label> * types de verres  * </label>
                                                <select name='verre_g'  onChange={(e) => {setVerre_g(e.target.value);}} >
                                                    <option value='photograys'> photograys</option>
                                                    <option value='photogray + AR'>photogray + AR</option>
                                                    <option value='photogray AR bleue cut'>photogray AR bleue cut</option>
                                                    <option value='teinte AB,C'>teinte AB,C</option>
                                                    <option value='transitions'>transitions</option>
                                                </select><br/> 
                                                 {errors.verre_g && <span className='errors'>{errors.verre_g} </span> }
                                            </div>
                                     </div>
                            </div>
                        </div>
                        <div className="prix">
                            <label> * prix de la monture* </label>
                            <input type='text' name='prix_m' placeholder=' EX : 100000 XOF'  onChange={(e) => {setPrix_m(parseFloat(e.target.value));}}/> 
                            <label> * Escompte* </label>
                            <input type='text'name='prix_av' placeholder=' EX : 100000 XOF'   onChange={(e) => {setPrix_av(e.target.value);}}/>            
                        </div>
                    
                    <div className='buton'><button>Valider</button></div>  
                </div>       
            </form>
            </div>
            
        </div>
    );
}

export default Command;
