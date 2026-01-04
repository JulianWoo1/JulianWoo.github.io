document.addEventListener("DOMContentLoaded", () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const auth = firebase.auth();
  const message = document.getElementById("authMessage");

  auth.onAuthStateChanged(user => {
    if (user) window.location.replace("portfolio.html");
  });

  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    message.textContent = "";
    auth.signInWithEmailAndPassword(loginEmail.value, loginPassword.value)
      .then(() => window.location.replace("portfolio.html"))
      .catch(err => message.textContent = err.message);
  });

  document.getElementById("registerForm").addEventListener("submit", e => {
    e.preventDefault();
    message.textContent = "";
    auth.createUserWithEmailAndPassword(registerEmail.value, registerPassword.value)
      .then(() => window.location.replace("portfolio.html"))
      .catch(err => message.textContent = err.message);
  });

  document.getElementById("resetForm").addEventListener("submit", e => {
    e.preventDefault();
    message.textContent = "";
    auth.sendPasswordResetEmail(resetEmail.value)
      .then(() => message.textContent = "Password reset email sent.")
      .catch(err => message.textContent = err.message);
  });
});
