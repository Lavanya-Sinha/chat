
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCtrV6ZPyWEUE1TY_60X1LA5MtqoUGmBqE",
  authDomain: "chat-c6d7d.firebaseapp.com",
  projectId: "chat-c6d7d",
  storageBucket: "chat-c6d7d.appspot.com",
  messagingSenderId: "885805256851",
  appId: "1:885805256851:web:d97ff0a641d8abdbaf7d66"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()