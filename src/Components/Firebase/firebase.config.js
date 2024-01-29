// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGGCdMEWTvkzJFLSXBGvbObLEQIRe6_og",
  authDomain: "alemeno-academy.firebaseapp.com",
  projectId: "alemeno-academy",
  storageBucket: "alemeno-academy.appspot.com",
  messagingSenderId: "236403208251",
  appId: "1:236403208251:web:862b77181c052b6afe6c1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;