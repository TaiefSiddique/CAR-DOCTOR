// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARVLsUsrGMwmzTg5IQK69rGSODqNGC73Y",
  authDomain: "car-doct-cfd6f.firebaseapp.com",
  projectId: "car-doct-cfd6f",
  storageBucket: "car-doct-cfd6f.appspot.com",
  messagingSenderId: "1081481129317",
  appId: "1:1081481129317:web:9fa148bd92331ec25bc58c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;