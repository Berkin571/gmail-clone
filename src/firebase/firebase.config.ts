import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

type FirebaseConfigType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

const firebaseConfig: FirebaseConfigType = {
  apiKey: "AIzaSyD0-bBOJxM8vk9xiYXIpIv94PR9uIk5Y2w",
  authDomain: "clo-f7285.firebaseapp.com",
  projectId: "clo-f7285",
  storageBucket: "clo-f7285.appspot.com",
  messagingSenderId: "207168989413",
  appId: "1:207168989413:web:d3dc168dcbbe1c2c2e4c0c",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const initializeAuth = getAuth();
