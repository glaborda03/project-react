// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlQ3Mc7SZRJbb2aSnT_w2N1gDuH6cznt8",
  authDomain: "cursoreactjs-486ed.firebaseapp.com",
  projectId: "cursoreactjs-486ed",
  storageBucket: "cursoreactjs-486ed.appspot.com",
  messagingSenderId: "200636446913",
  appId: "1:200636446913:web:4832b5e01c7666ecda3c40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db