import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDA-9aD19FZn-DdVKks_O01-_-P_vezmHE",
  authDomain: "asaph-b3c51.firebaseapp.com",
  projectId: "asaph-b3c51",
  storageBucket: "asaph-b3c51.appspot.com",
  messagingSenderId: "347665317092",
  appId: "1:347665317092:web:8c50a019f604449f6d00f1",
  measurementId: "G-LF39J281NK"
};
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);