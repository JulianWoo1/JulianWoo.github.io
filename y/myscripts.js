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
  console.log("DOM fully loaded");

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const auth = firebase.auth();
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("loginError");
  const logoutBtn = document.getElementById("logoutBtn");
  const protectedContent = document.getElementById("protectedContent");

  if (protectedContent) {
    protectedContent.hidden = true;
  }

  auth.onAuthStateChanged((user) => {
    const currentPage = window.location.pathname;
    console.log("Auth state changed. User:", user ? "logged in" : "logged out");
    
    if (user) {
      if (protectedContent) {
        protectedContent.hidden = false;
      }

      if (loginForm && (currentPage.includes("index.html") || currentPage === "/")) {
        loginForm.style.display = "none";
        
        const portfolioSection = document.getElementById("portfolio");
        if (portfolioSection && !document.getElementById("loggedInMessage")) {
          const messageDiv = document.createElement("div");
          messageDiv.id = "loggedInMessage";
          messageDiv.style.cssText = "text-align: center; padding: 2rem;";
          messageDiv.innerHTML = `
            <p style="color: #4ade80; font-size: 1.2rem; margin-bottom: 1.5rem;"> You are logged in.</p>
            <a href="portfolio.html" style="display: inline-block; background-color: #FF5C00; color: white; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: 600;">Go to Portfolio</a>
          `;
          portfolioSection.appendChild(messageDiv);
        }
      }
    } else {
      if (currentPage.includes("portfolio.html")) {
        window.location.replace("index.html");
      }

      if (loginForm) {
        loginForm.style.display = "flex";
        const loggedInMsg = document.getElementById("loggedInMessage");
        if (loggedInMsg) {
          loggedInMsg.remove();
        }
      }
    }
  });

  if (loginForm && errorMessage) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      errorMessage.textContent = "";

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!email || !password) {
        errorMessage.textContent = "Please fill in all fields.";
        return;
      }

      console.log("Attempting login...");
      auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log("Login successful");
        })
        .catch((error) => {
          console.error("Login error:", error);
          errorMessage.textContent = error.message;
        });
    });
  }

  if (logoutBtn) {
    console.log("Logout button found, attaching event listener");
    logoutBtn.addEventListener("click", () => {
      console.log("Logout button clicked");
      auth.signOut()
        .then(() => {
          console.log("Logout successful");
        })
        .catch((err) => {
          console.error("Logout failed:", err);
          alert("Logout failed: " + err.message);
        });
    });
  } else {
    console.log("Logout button not found");
  }
});

function togglePassword() {
  const passwordInput = document.getElementById("password");
  if (passwordInput) {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  }
}