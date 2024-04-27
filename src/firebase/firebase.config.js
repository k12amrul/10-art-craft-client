

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnjJd6rVb-_z01W8SCkhMpymBVE4H_ZUU",
  authDomain: "a-10-drawing-client.firebaseapp.com",
  projectId: "a-10-drawing-client",
  storageBucket: "a-10-drawing-client.appspot.com",
  messagingSenderId: "255090504533",
  appId: "1:255090504533:web:9e8fc19d49a2cbd3cd35dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app