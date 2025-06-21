// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoLXA94DZ48G9UOUIWjr8pbZmfovm9uVU",
  authDomain: "portfolio-cdf15.firebaseapp.com",
  projectId: "portfolio-cdf15",
  storageBucket: "portfolio-cdf15.firebasestorage.app",
  messagingSenderId: "916089691332",
  appId: "1:916089691332:web:93b29b4048951da401fd91",
  measurementId: "G-9H3KE1J7W9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(); // Define `auth` here

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  console.log("Login button clicked!"); // Debugging step

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log("Email:", email, "Password:", password); // Debugging step

  const auth = firebase.auth();

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Login successful!", userCredential);
      alert("Login successful!");
      window.location.href = "portfolio.html"; // Redirect after login
    })
    .catch((error) => {
      console.error("Login failed:", error);
      alert("Invalid credentials: " + error.message);
    });
});

