// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn6Y5aEtCbXb5Ap-EM6qiiV0AAcctrDrg",
  authDomain: "b2y---reactnative.firebaseapp.com",
  projectId: "b2y---reactnative",
  storageBucket: "b2y---reactnative.appspot.com",
  messagingSenderId: "935869383469",
  appId: "1:935869383469:web:872bcd950a826330c289a4",
  measurementId: "G-EGYHRKGB88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Inicializando Auth (para autenticação)
const auth = getAuth(app);
export { auth };