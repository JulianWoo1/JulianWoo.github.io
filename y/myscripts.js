console.log("Script loaded");

const firebaseConfig = {
  apiKey: "AIzaSyAoLXA94DZ48G9UOUIWjr8pbZmfovm9uVU",
  authDomain: "portfolio-cdf15.firebaseapp.com",
  projectId: "portfolio-cdf15",
  storageBucket: "portfolio-cdf15.firebasestorage.app",
  messagingSenderId: "916089691332",
  appId: "1:916089691332:web:93b29b4048951da401fd91",
  measurementId: "G-9H3KE1J7W9"
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("📄 DOM fully loaded");

  // Initialize Firebase only once
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("✅ Firebase initialized");
  } else {
    console.log("ℹ️ Firebase already initialized");
  }

  const auth = firebase.auth();
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("✅ Login form submitted");

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          console.log("🎉 Login successful!", userCredential);
          window.location.href = "./portfolio.html";
        })
        .catch((error) => {
          console.error("❌ Login failed:", error);
          alert("Login failed: " + error.message);
        });
    });
  }
});

// Toggle password visibility
function togglePassword() {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
