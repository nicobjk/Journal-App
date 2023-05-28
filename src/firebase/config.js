// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev / Prod
// const firebaseConfig = {
//     apiKey: "AIzaSyBFjz6Ty4qZo5gWotQysAv-AB-S8baAW6E",
//     authDomain: "react-cursos-9e78f.firebaseapp.com",
//     projectId: "react-cursos-9e78f",
//     storageBucket: "react-cursos-9e78f.appspot.com",
//     messagingSenderId: "420613354766",
//     appId: "1:420613354766:web:9e2204f52212615c49d35f"
// };

//Testing
const firebaseConfig = {
    apiKey: "AIzaSyBrZbKVB7tIxlQIyZrUQuC-AxnOh35heHo",
    authDomain: "react-cursos-pruebas-a01a3.firebaseapp.com",
    projectId: "react-cursos-pruebas-a01a3",
    storageBucket: "react-cursos-pruebas-a01a3.appspot.com",
    messagingSenderId: "981085334750",
    appId: "1:981085334750:web:a585f827ec9ada8a3ee64f",
    measurementId: "G-4HKMMWQJ0C"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);