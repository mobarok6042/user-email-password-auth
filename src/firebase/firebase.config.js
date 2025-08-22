// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7PFLEpQzvz56EnZsGndWFsJfXsxiqKd8",
  authDomain: "user-email-password-auth-e2dbe.firebaseapp.com",
  projectId: "user-email-password-auth-e2dbe",
  storageBucket: "user-email-password-auth-e2dbe.firebasestorage.app",
  messagingSenderId: "692941722183",
  appId: "1:692941722183:web:a4a37bd3f32cc45dcc1762"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;