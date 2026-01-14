import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXzDnVnqQUujz6rTArqM4qf0OzOpIZOmM",
  authDomain: "annpurnabakery-6c2b9.firebaseapp.com",
  projectId: "annpurnabakery-6c2b9",
  storageBucket: "annpurnabakery-6c2b9.firebasestorage.app",
  messagingSenderId: "915174453386",
  appId: "1:915174453386:web:04db2dd16d03fbb625bd73",
  measurementId: "G-3M3W8MT4RR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
