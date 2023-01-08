import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANY4AxyLmAooSSRgNTHc407IUqVfA4P10",
  authDomain: "challenge-greydive-2a326.firebaseapp.com",
  projectId: "challenge-greydive-2a326",
  storageBucket: "challenge-greydive-2a326.appspot.com",
  messagingSenderId: "881961617606",
  appId: "1:881961617606:web:2e1ffa573aa5cc9a822fc7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
