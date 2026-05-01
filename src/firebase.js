// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYG72Ylc66aDkDrp1R95UmgIP8nl6IPFI",
  authDomain: "starlit-channel-494711-n8.firebaseapp.com",
  projectId: "starlit-channel-494711-n8",
  storageBucket: "starlit-channel-494711-n8.firebasestorage.app",
  messagingSenderId: "815322118225",
  appId: "1:815322118225:web:bfd7f0154eb32601962070",
  measurementId: "G-LE3QGVHWWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);