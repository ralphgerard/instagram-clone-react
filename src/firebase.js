import firebase from "firebase/app";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDDUI1MZi624XdSSrauS5lOjpzqBXf1lUI",
  authDomain: "instagram-clone-react-ac50a.firebaseapp.com",
  projectId: "instagram-clone-react-ac50a",
  storageBucket: "instagram-clone-react-ac50a.firebasestorage.app",
  messagingSenderId: "194952125828",
  appId: "1:194952125828:web:8633e12e20f70b217d51d1",
  measurementId: "G-PSKR63EYHF",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
