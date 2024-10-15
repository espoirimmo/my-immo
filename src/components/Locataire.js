import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Locataire = () => {
  const [locataire, setLocataire] = useState([]);

  useEffect(() => {
    const fetchLocataire = async () => {
      const locataireCollection = await getDocs(collection(db, 'locataire'));
      setLocataire(locataireCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchLocataire();
  }, []);

  return (
    <div>
      <h1 className='text-center font-bold bg-red-400'>Locataire</h1>
      <ul>
        {locataire.map(locataire => (
          <li key={locataire.id}>
            {locataire.name} - {locataire.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Locataire;
