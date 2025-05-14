import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfx0Yab_0v5NKt7U9-rqy7RGAWadzsrK4",
  authDomain: "ai-agencija.firebaseapp.com",
  projectId: "ai-agencija",
  storageBucket: "ai-agencija.firebasestorage.app", // Updated to correct bucket name
  messagingSenderId: "778245425567",
  appId: "1:778245425567:web:46fd7be31fd123047155aa",
  measurementId: "G-ZKTL6Y96PE"
};

// Initialize Firebase conditionally
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

// Export the initialized app instance and auth
export { app, db };
export const auth = getAuth(app); 