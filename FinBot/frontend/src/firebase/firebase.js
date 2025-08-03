// firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDC4BU7crXP6HAZBh_fdh7Bz0BgJgViR-w",
  authDomain: "finbot-a7ea3.firebaseapp.com",
  projectId: "finbot-a7ea3",
  storageBucket: "finbot-a7ea3.appspot.com",
  messagingSenderId: "1049934545024",
  appId: "1:1049934545024:web:c98e6578f2de7ee90e2665",
  measurementId: "G-M3NSJ5RNGD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
