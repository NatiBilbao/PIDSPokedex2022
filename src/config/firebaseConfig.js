import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAHW8UHHyh01YYSPIGaG-iuxIN1J8vOh_U",

  authDomain: "pokedex-5c1da.firebaseapp.com",

  projectId: "pokedex-5c1da",

  storageBucket: "pokedex-5c1da.appspot.com",

  messagingSenderId: "974684053547",

  appId: "1:974684053547:web:9ad6afd4dc13dda0238a6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const loginWithEmailAndPassword = async (email, password) => {//espera a que se haga login 
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    return console.error(err);
  }
};
export { 
  auth,
  loginWithEmailAndPassword 
};