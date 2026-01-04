document.addEventListener("DOMContentLoaded", () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const auth = firebase.auth();
  const logoutBtn = document.getElementById("logoutBtn");
  const protectedContent = document.getElementById("protectedContent");

  if (protectedContent) protectedContent.hidden = true;

  auth.onAuthStateChanged(user => {
    if (!user) {
      window.location.replace("index.html");
    } else if (protectedContent) {
      protectedContent.hidden = false;
    }
  });

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      auth.signOut().then(() => {
        window.location.replace("index.html");
      }).catch(err => {
        console.error("Logout failed:", err);
        alert("Logout failed: " + err.message);
      });
    });
  }
});
