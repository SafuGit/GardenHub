// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDew1hZW6ilCyAQalhIkPuClt3XdxiueYg",
  authDomain: "safu-a10.firebaseapp.com",
  projectId: "safu-a10",
  storageBucket: "safu-a10.firebasestorage.app",
  messagingSenderId: "372466566602",
  appId: "1:372466566602:web:ea5e7e90db5ea7e9aafb33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);