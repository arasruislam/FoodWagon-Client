// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD56PB2WW-CFHqQ9RQM-YUZM8V6HIwwIRE",
  authDomain: "chef-recipe-hunter-assignment.firebaseapp.com",
  projectId: "chef-recipe-hunter-assignment",
  storageBucket: "chef-recipe-hunter-assignment.appspot.com",
  messagingSenderId: "452810724522",
  appId: "1:452810724522:web:30eb47eda2872ef2442cd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;