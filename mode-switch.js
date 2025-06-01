// === Cleaned and Consolidated JavaScript for Naomi Jouan Portfolio ===

// === GLOBAL FUNCTIONS ===
function toggleSkills(trigger) {
const grid = trigger.parentElement.querySelector('.skills-grid');
  const arrow = trigger.querySelector('.arrow');
  if (grid) {
    grid.classList.toggle('hidden');
  }
  if (arrow) {
    trigger.classList.toggle('expanded');
    arrow.textContent = trigger.classList.contains('expanded') ? '▲' : '▼';
  }
}

function setDarkMode() {
  console.log("Switching to Dark Mode...");
  const themeStylesheet = document.getElementById("themeStylesheet");
  themeStylesheet.href = "styles-dark.css";
  localStorage.setItem("theme", "dark");

  const linkedinIcon = document.getElementById("linkedin-icon");
  const itchioIcon = document.getElementById("itchio-icon");
  if (linkedinIcon) linkedinIcon.src = "assets/linkedin-iconblue.png";
  if (itchioIcon) itchioIcon.src = "assets/itchio-iconblue.png";

  const resumeImage = document.getElementById("resumeImage");
  const resumeLink = document.getElementById("resumeLink");
  if (resumeImage) resumeImage.src = "assets/NaomiJouan_CV_dark.png";
  if (resumeLink) resumeLink.href = "assets/NaomiJouan_CV_dark.pdf";

  const leoncitozeImage = document.getElementById("leoncitozeImage");
  if (leoncitozeImage) leoncitozeImage.src = "assets/Leoncitoze_thumbnail2.png";

  const veilImage = document.getElementById("veilImage");
  if (veilImage) veilImage.src = "assets/veil-thumbnail2.png";

  const portfolioImage = document.getElementById("portfolioImage");
  if (portfolioImage) portfolioImage.src = "assets/Portfolio_First2.png";
}

function setHappyMode() {
  console.log("Switching to Happy Mode...");
  const themeStylesheet = document.getElementById("themeStylesheet");
  themeStylesheet.href = "styles.css";
  localStorage.setItem("theme", "happy");

  const linkedinIcon = document.getElementById("linkedin-icon");
  const itchioIcon = document.getElementById("itchio-icon");
  if (linkedinIcon) linkedinIcon.src = "assets/linkedin-icon.png";
  if (itchioIcon) itchioIcon.src = "assets/itchio-icon.png";

  const resumeImage = document.getElementById("resumeImage");
  const resumeLink = document.getElementById("resumeLink");
  if (resumeImage) resumeImage.src = "assets/NaomiJouan_CV.png";
  if (resumeLink) resumeLink.href = "assets/NaomiJouan_CV.pdf";

  const leoncitozeImage = document.getElementById("leoncitozeImage");
  if (leoncitozeImage) leoncitozeImage.src = "assets/Leoncitoze_thumbnail.png";

  const veilImage = document.getElementById("veilImage");
  if (veilImage) veilImage.src = "assets/veil-thumbnail.png";

  const portfolioImage = document.getElementById("portfolioImage");
  if (portfolioImage) portfolioImage.src = "assets/Portfolio_First.png";
}


// === DOMContentLoaded ===
document.addEventListener("DOMContentLoaded", function () {
  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  console.log("Saved theme on load:", savedTheme);
  if (savedTheme === "dark") {
    setDarkMode();
  } else {
    setHappyMode();
  }

  // Theme toggle buttons
  const happyModeButton = document.getElementById("happyMode");
  const darkModeButton = document.getElementById("darkMode");
  if (happyModeButton) happyModeButton.addEventListener("click", setHappyMode);
  if (darkModeButton) darkModeButton.addEventListener("click", setDarkMode);

  // Burger menu toggle
  const burger = document.getElementById("burgerMenu");
  const navLinks = document.getElementById("navLinks");
  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Update active page name
  const activePage = document.getElementById("activePage");
  const pageMap = {
    "index.html": "ABOUT",
    "resume.html": "RESUME",
    "videogames.html": "VIDEOGAMES",
    "boardgames.html": "BOARDGAMES",
    "narration.html": "NARRATION"
  };
  const currentPage = window.location.pathname.split("/").pop();
  if (activePage) activePage.textContent = pageMap[currentPage] || "ABOUT";

  // Scroll to top button
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.onscroll = function () {
      scrollBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
        ? "block" : "none";
    };
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Attach toggleSkills listeners if not using inline onclick
  const expandBars = document.querySelectorAll('.expand-arrow-bar');
  expandBars.forEach(bar => {
    bar.addEventListener('click', function () {
      toggleSkills(this);
    });
  });
});
