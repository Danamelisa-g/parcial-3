// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth }from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2iV19LWX8wix0W0smv1y1seAq9BOaPtc",
  authDomain: "parcial3-ba95a.firebaseapp.com",
  projectId: "parcial3-ba95a",
  storageBucket: "parcial3-ba95a.firebasestorage.app",
  messagingSenderId: "157061671789",
  appId: "1:157061671789:web:297c5051bade46143a4864",
  measurementId: "G-B70XDLJ8WC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)