import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyA4AP3PJS5DTjp__YTUltbjYiqd-ao83EQ",
    authDomain: "clone-fd795.firebaseapp.com",
    projectId: "clone-fd795",
    storageBucket: "clone-fd795.appspot.com",
    messagingSenderId: "783521800651",
    appId: "1:783521800651:web:6829fbffe7541854ed964e",
    measurementId: "G-TFVRPGDVMD"
};

const app =initializeApp(firebaseConfig);

const auth = getAuth(app)

export {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
};
