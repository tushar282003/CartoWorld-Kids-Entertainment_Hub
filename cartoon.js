function searchItem() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll("img[alt]");

  let found = false;

  items.forEach(item => {
    const title = item.getAttribute("alt").toLowerCase();
    if (title.includes(input)) {
      found = true;
      item.scrollIntoView({ behavior: "smooth", block: "center" });
      item.classList.add("highlight");
      setTimeout(() => item.classList.remove("highlight"), 3000);
    }
  });

  if (!found) {
    alert("No match found!");
  }
}



// Category Section
const toggle = document.getElementById('categoryToggle');
const dropdown = document.querySelector('.dropdown');

toggle.addEventListener('click', function (e) {
    e.preventDefault();
    dropdown.classList.toggle('open');
});


// Close the dropdown if clicked outside
document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target) && e.target !== toggle) {
        dropdown.classList.remove('open');
    }
});

// Hamburger for Responsiveness
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});



// Get modal elements for youtube video
const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeBtn = document.querySelector(".close-btn");

// Attach click event to each card
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function () {
        const videoUrl = this.getAttribute("data-video");
        videoFrame.src = videoUrl + "?autoplay=1"; // autoplay on open
        modal.style.display = "flex";
    });
});

// Close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
    videoFrame.src = ""; // stop video
}

// click outside modal to close
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
        videoFrame.src = "";
    }
}

// Login/Signup

window.onload = function () {
  updateAuthText();
};

function updateAuthText() {
  const authBtn = document.getElementById("authBtn");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  authBtn.textContent = isLoggedIn ? "Logout" : "Login";

  authBtn.onclick = function () {
    if (localStorage.getItem("isLoggedIn") === "true") {
      //  Logout part
      localStorage.setItem("isLoggedIn", "false");
      alert("Logged out!");
      updateAuthText(); // Update button text to Login
      
    } else {
      //  Go to login page
      window.location.href = "login.html";
    }
  };
}


