// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd1u_VpTHSfWWkxWDrgxQJcAXHDuqrSKE",
  authDomain: "icy-legends.firebaseapp.com",
  projectId: "icy-legends",
  storageBucket: "icy-legends.firebasestorage.app",
  messagingSenderId: "708594657578",
  appId: "1:708594657578:web:e617935e0197e60a38d653",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
