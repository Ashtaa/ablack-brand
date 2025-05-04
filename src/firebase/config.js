// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8yHjdG5jj3977ehLQn0fh3k6YaIazdew",
  authDomain: "ablack-6e21c.firebaseapp.com",
  projectId: "ablack-6e21c",
  storageBucket: "ablack-6e21c.firebasestorage.app",
  messagingSenderId: "1087594859316",
  appId: "1:1087594859316:web:aaa0cc3734ba7ed3acf361"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);