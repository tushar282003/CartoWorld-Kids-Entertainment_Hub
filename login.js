let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;
  document.getElementById("formTitle").textContent = isLogin ? "Login" : "Sign Up";
  document.getElementById("formBtn").textContent = isLogin ? "Login" : "Sign Up";
  document.getElementById("toggleText").innerHTML = isLogin
    ? `Don't have an account? <a href="#" onclick="toggleForm()">Sign Up</a>`
    : `Already have an account? <a href="#" onclick="toggleForm()">Login</a>`;
}

function handleAuth() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill in both fields.");
    return;
  }

  // Get existing users
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (isLogin) {
    // 🔐 LOGIN
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", email);
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password!");
    }
  } else {
    // 🆕 SIGNUP
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert("User already exists. Try logging in.");
      toggleForm();
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Now login.");
    toggleForm();
  }
}

function goHome() {
  window.location.href = "index.html";
}
