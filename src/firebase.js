import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHqzTzVYN_suNpmX9xHMIFL7u3lWuQpiQ",
  authDomain: "my-immo-6afcb.firebaseapp.com",
  projectId: "my-immo-6afcb",
  storageBucket: "my-immo-6afcb.appspot.com",
  messagingSenderId: "249707605051",
  appId: "1:249707605051:web:f26f6b3e4a7fa9167d001e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
