// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
    authDomain: "hospital-locator-2cb6a.firebaseapp.com",
    projectId: "hospital-locator-2cb6a",
    storageBucket: "hospital-locator-2cb6a.appspot.com",
    messagingSenderId: "865969191920",
    appId: "1:865969191920:web:dacd25b263f5ce33b63b35",
    measurementId: "G-KCCE8FZLE2"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
