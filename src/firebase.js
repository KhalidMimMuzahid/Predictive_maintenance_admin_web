// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAElzTi61JiVQI3BqoVPUhOxIUoTjRgHy4",
  authDomain: "showa-admin.firebaseapp.com",
  projectId: "showa-admin",
  storageBucket: "showa-admin.appspot.com",
  messagingSenderId: "829268194744",
  appId: "1:829268194744:web:99a156e09a624eb3eecb4d",
  measurementId: "G-KEXDSG0QDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
