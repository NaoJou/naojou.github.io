document.addEventListener("DOMContentLoaded", function () {
  const themeStylesheet = document.getElementById("themeStylesheet");
  const happyModeButton = document.getElementById("happyMode");
  const darkModeButton = document.getElementById("darkMode");
  const linkedinIcon = document.getElementById("linkedin-icon");
  const itchioIcon = document.getElementById("itchio-icon");

  function updateThemeIcons(theme) {
    const themedIcons = document.querySelectorAll(".theme-icon");
    themedIcons.forEach(icon => {
      const newSrc = icon.dataset[theme];
      if (newSrc) icon.src = newSrc;
    });
  }

  function setDarkMode() {
    themeStylesheet.href = "styles-dark.css";
    localStorage.setItem("theme", "dark");
    if (linkedinIcon) linkedinIcon.src = "assets/linkedin-iconblue.png";
    if (itchioIcon) itchioIcon.src = "assets/itchio-iconblue.png";

 const resumeLink = document.getElementById("resumeLink");
  const page1 = document.getElementById("resumePage1");
  const page2 = document.getElementById("resumePage2");

  if (resumeLink) resumeLink.href = "assets/NaomiJouan_CV2_dark.pdf";
  if (page1) page1.src = "assets/CV2Page1_v2.png";
  if (page2) page2.src = "assets/CV2Page2_v2.png";

    const leoncitozeImage = document.getElementById("leoncitozeImage");
    if (leoncitozeImage) leoncitozeImage.src = "assets/Leoncitoze_thumbnail2.png";

    const veilImage = document.getElementById("veilImage");
    if (veilImage) veilImage.src = "assets/veil-thumbnail2.png";

    const portfolioImage = document.getElementById("portfolioImage");
    if (portfolioImage) portfolioImage.src = "assets/Portfolio_First2.png";

    updateThemeIcons("dark");
  }

function setHappyMode() {
  themeStylesheet.href = "styles.css";
  localStorage.setItem("theme", "happy");

  if (linkedinIcon) linkedinIcon.src = "assets/linkedin-icon.png";
  if (itchioIcon) itchioIcon.src = "assets/itchio-icon.png";

  const resumeLink = document.getElementById("resumeLink");
  const page1 = document.getElementById("resumePage1");
  const page2 = document.getElementById("resumePage2");

  if (resumeLink) resumeLink.href = "assets/NaomiJouan_CV.pdf";
  if (page1) page1.src = "assets/CV1Page1_v2.png";
  if (page2) page2.src = "assets/CV1Page2_v2.png";

  const leoncitozeImage = document.getElementById("leoncitozeImage");
  if (leoncitozeImage) leoncitozeImage.src = "assets/Leoncitoze_thumbnail.png";

  const veilImage = document.getElementById("veilImage");
  if (veilImage) veilImage.src = "assets/veil-thumbnail.png";

  const portfolioImage = document.getElementById("portfolioImage");
  if (portfolioImage) portfolioImage.src = "assets/Portfolio_First.png";

  updateThemeIcons("happy");
}

  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") setDarkMode();
  else setHappyMode();

  // Toggle listeners
  if (happyModeButton) happyModeButton.addEventListener("click", setHappyMode);
  if (darkModeButton) darkModeButton.addEventListener("click", setDarkMode);

  // Scroll to top button
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.onscroll = function () {
      scrollBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
        ? "block" : "none";
    };
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Burger menu toggle
  const burger = document.getElementById("burgerMenu");
  const navLinks = document.getElementById("navLinks");
  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Update page name
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

  // Attach toggleSkills listeners
  const expandBars = document.querySelectorAll(".expand-arrow-bar");
  expandBars.forEach(bar => {
    bar.addEventListener("click", function () {
      const grid = bar.nextElementSibling;
      const arrow = bar.querySelector(".arrow");
      grid.classList.toggle("hidden");
      bar.classList.toggle("expanded");
    });
  });
});
