import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Paiement = () => {
  const [paiement, setPaiement] = useState([]);

  useEffect(() => {
    const fetchPaiement = async () => {
      const paiementCollection = await getDocs(collection(db, 'paiement'));
      setPaiement(paiementCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchPaiement();
  }, []);

  return (
    <div>
      <h1 className="text-sm text-gray-500">Paiement</h1>
      <p>page pour le paiement de loyer</p>
      <ul>
        {paiement.map(paiement => (
          <li key={paiement.id}>
            Locataire: {paiement.locataireName} - Amount: ${paiement.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paiement;
