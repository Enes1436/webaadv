// Vendos vitin aktual në footer
document.getElementById("year").textContent = new Date().getFullYear();

// Efekt fade kur elementet shfaqen në ekran
const faders = document.querySelectorAll(".fade");
const options = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, options);

faders.forEach(fade => {
  appearOnScroll.observe(fade);
});
// darkmode.js

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Load saved mode from localStorage
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === "enabled") {
        body.classList.add("dark-mode");
        if (toggle) toggle.textContent = "☀️ Light Mode";
    }

    // Toggle dark mode on click
    if (toggle) {
        toggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                toggle.textContent = "☀️ Light Mode";
            } else {
                localStorage.setItem("darkMode", "disabled");
                toggle.textContent = "🌙 Dark Mode";
            }
        });
    }
});
const elements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

// Butoni "Kthehu lart"
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// jQuery (Load from CDN automatically if not included)
if (!window.jQuery) {
  let script = document.createElement("script");
  script.src = "https://code.jquery.com/jquery-3.7.1.min.js";
  document.head.appendChild(script);
}

// Bayern player list for validation (ARRAY + CONDITIONALS)
const validPlayers = [
  "Musiala", "Kimmich", "Neuer", "Kane", "Müller", "Davies", "Sane"
];

// Regex rules
const nameRegex = /^[A-Za-z\s]{3,}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[A-Za-z]{2,}$/;

// Form logic
$(document).on("submit", "#feedbackForm", function (e) {
  e.preventDefault();

  let name = $("#fullName").val().trim();
  let email = $("#email").val().trim();
  let player = $("#player").val().trim();
  let message = $("#message").val().trim();

  let isValid = true;

  // Name validation + input manipulation
  if (!nameRegex.test(name)) {
    $("#fullName").next(".error").text("Name must be at least 3 letters.");
    isValid = false;
  } else {
    // Capitalize name fully
    name = name.toUpperCase();
    $("#fullName").val(name);
    $("#fullName").next(".error").text("");
  }

  // Email regex
  if (!emailRegex.test(email)) {
    $("#email").next(".error").text("Invalid email format.");
    isValid = false;
  } else {
    $("#email").next(".error").text("");
  }

  // Player check (array + conditional)
  if (!validPlayers.includes(player)) {
    $("#player").next(".error").text("Player not found in Bayern squad!");
    isValid = false;
  } else {
    $("#player").next(".error").text("");
  }

  // Message length
  if (message.length < 5) {
    $("#message").next(".error").text("Message must be 5+ characters.");
    isValid = false;
  } else {
    $("#message").next(".error").text("");
  }

  // Final success
  if (isValid) {
    $("#successMsg").fadeIn();
    setTimeout(() => $("#successMsg").fadeOut(), 2000);

    // Store feedback (array example)
    const feedback = {
      name,
      email,
      player,
      message
    };

    console.log("Saved Feedback:", feedback);
  }
});
