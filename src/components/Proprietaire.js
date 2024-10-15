import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Importer la configuration Firebase
import { collection, getDocs } from 'firebase/firestore';

const Proprietaire = () => {
  const [proprietaire, setProprietaire] = useState([]);

  useEffect(() => {
    const fetchProprietaire = async () => {
      const proprietaireCollection = await getDocs(collection(db, 'proprietaire'));
      setProprietaire(proprietaireCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchProprietaire();
  }, []);

  return (
    <div>
      <h1>Proprietaire</h1>
      <ul>
        {proprietaire.map(property => (
          <li key={property.id}>
            {property.address} - ${property.rent}/month
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Proprietaire;