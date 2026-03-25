// js/auth.js

import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  setDoc,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// SIGNUP
export async function signup() {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    const userCred = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", userCred.user.uid), {
      email: email,
      role: role
    });

    alert("Signup successful!");
    window.location.href = "login.html";

  } catch (error) {
    alert(error.message);
  }
}

// LOGIN
export async function login() {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userCred = await signInWithEmailAndPassword(auth, email, password);

    const docRef = doc(db, "users", userCred.user.uid);
    const userData = await getDoc(docRef);

    const role = userData.data().role;

    if (role === "fresher") {
      window.location.href = "fresher.html";
    } else {
      window.location.href = "experienced.html";
    }

  } catch (error) {
    alert(error.message);
  }
}
