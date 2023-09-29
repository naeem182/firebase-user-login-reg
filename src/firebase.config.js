// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKO1OJ8VI09_Qrkhl1uKr3zzkNgN9GsLk",
    authDomain: "form-login-594fc.firebaseapp.com",
    projectId: "form-login-594fc",
    storageBucket: "form-login-594fc.appspot.com",
    messagingSenderId: "483051981401",
    appId: "1:483051981401:web:f86bb34b1545d18ef33f48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getauth(app)

export default app