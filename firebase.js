import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBEMOth8lWfXPZ64dJM96FyRKrTERieWcI",
  authDomain: "facebook-556eb.firebaseapp.com",
  projectId: "facebook-556eb",
  storageBucket: "facebook-556eb.appspot.com",
  messagingSenderId: "657048836847",
  appId: "1:657048836847:web:d9ae9c54c16e0077fc991a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const storage = getStorage(app);


export {db,storage};