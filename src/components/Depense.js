import React, { useEffect, useState } from 'react';
import {db} from './firebase-config'
import { collection, getDocs } from "firebase/firestore";

function Depense() {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    // Fonction pour récupérer et additionner les valeurs
    const fetchAndCalculateSum = async () => {
      const querySnapshot = await getDocs(collection(db, "clientAsaph"));
      let total = 0;

      // Additionne les valeurs du champ "amount"
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (typeof data.prix_m === 'number') { // Vérifie que c'est un nombre
          total += data.prix_m;
        }
      });

      setSum(total); // Met à jour la somme dans l'état
    };

    fetchAndCalculateSum();
  }, []);

  return (
    <div>
      <p>{sum}</p>
    </div>
  );
}

export default Depense;
