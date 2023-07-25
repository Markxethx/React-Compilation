import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB0VABB--pR-dRmByauLgBEIQIyRYK0dNw",
    authDomain: "react-contact-form-82bc0.firebaseapp.com",
    projectId: "react-contact-form-82bc0",
    storageBucket: "react-contact-form-82bc0.appspot.com",
    messagingSenderId: "937417138355",
    appId: "1:937417138355:web:ad39a3005236ccb54450c6"
  };    

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)