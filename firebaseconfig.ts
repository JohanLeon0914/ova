// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV_bMB0ie33M3OCcdBvBsIo8JiEgWvW4Y",
  authDomain: "login-ova.firebaseapp.com",
  projectId: "login-ova",
  storageBucket: "login-ova.appspot.com",
  messagingSenderId: "653690275448",
  appId: "1:653690275448:web:a85e159eba8af892da4f8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }