import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-FHUTXHO1vufpKuegJlwYw7xTK9duGXw",
  authDomain: "fm-todo.firebaseapp.com",
  projectId: "fm-todo",
  storageBucket: "fm-todo.appspot.com",
  messagingSenderId: "188074940752",
  appId: "1:188074940752:web:8d4727e9027bba59ee7455",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
