// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBA1NJ46RQk8JXbjAqKJtUtuEg2iaLDDrc",
    authDomain: "fir-auth-reactjs-d8db8.firebaseapp.com",
    projectId: "fir-auth-reactjs-d8db8",
    storageBucket: "fir-auth-reactjs-d8db8.appspot.com",
    messagingSenderId: "360678318421",
    appId: "1:360678318421:web:9ba16d437f5515ff760fdc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;