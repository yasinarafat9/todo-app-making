import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAi9dplkw13V872alMKabMfAgv523HnErY",
    authDomain: "fir-todo-app-50b6c.firebaseapp.com",
    projectId: "fir-todo-app-50b6c",
    storageBucket: "fir-todo-app-50b6c.appspot.com",
    messagingSenderId: "804041560940",
    appId: "1:804041560940:web:9a60c12c97e4ede1a25949"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);