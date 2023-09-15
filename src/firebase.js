import { initializeApp } from "firebase/app";
import {collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1zi8_p6YvhXYKkT8KcQUSRo6HMd6iPbs",
  authDomain: "react-notes-ukcurious.firebaseapp.com",
  projectId: "react-notes-ukcurious",
  storageBucket: "react-notes-ukcurious.appspot.com",
  messagingSenderId: "642871166072",
  appId: "1:642871166072:web:c5b700b3a1c2dee314998d"
};


const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")
