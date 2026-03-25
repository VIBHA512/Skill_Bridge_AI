// js/firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNOVqUw3BlbbCtyRhLtCoqpwbO3aB28_g",
  authDomain: "skill-bridge-ai-83616.firebaseapp.com",
  projectId: "skill-bridge-ai-83616",
  storageBucket: "skill-bridge-ai-83616.firebasestorage.app",
  messagingSenderId: "604651826667",
  appId: "1:604651826667:web:e55b89299ca8197817fdae",
  measurementId: "G-CXNBVF0Y5Q"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
