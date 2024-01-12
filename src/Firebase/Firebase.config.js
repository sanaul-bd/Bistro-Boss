// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: "AIzaSyC-k23tW1wLboSCgG2CokVieK8N0a0oaJE",
    // authDomain: "bistro-boss-restaurant-dbe5f.firebaseapp.com",
    // projectId: "bistro-boss-restaurant-dbe5f",
    // storageBucket: "bistro-boss-restaurant-dbe5f.appspot.com",
    // messagingSenderId: "556766475954",
    // appId: "1:556766475954:web:2f2e91dde7f669cd393bab",
    // measurementId: "G-D87W16BRK5",


    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
    measurementId: import.meta.env.VITE_measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);