document.addEventListener("DOMContentLoaded", function () {
    const themeStylesheet = document.getElementById("themeStylesheet");
    const happyModeButton = document.getElementById("happyMode");
    const darkModeButton = document.getElementById("darkMode");

    const linkedinIcon = document.getElementById("linkedin-icon");
    const itchioIcon = document.getElementById("itchio-icon");

    function setDarkMode() {
        console.log("Switching to Dark Mode...");
        themeStylesheet.href = "styles-dark.css";
        if (linkedinIcon) linkedinIcon.src = "assets/linkedin-iconblue.png";
        if (itchioIcon) itchioIcon.src = "assets/itchio-iconblue.png";
        localStorage.setItem("theme", "dark");
        const resumeImage = document.getElementById("resumeImage");
    const resumeLink = document.getElementById("resumeLink");

    if (resumeImage) resumeImage.src = "assets/NaomiJouan_CV_dark.png";
    if (resumeLink) resumeLink.href = "assets/NaomiJouan_CV_dark.pdf";

    const leoncitozeImage = document.getElementById("leoncitozeImage");
    if (leoncitozeImage) leoncitozeImage.src = "assets/Leoncitoze_thumbnail2.png";

        const veilImage = document.getElementById("veilImage");
    if (veilImage)  veilImage.src = "assets/veil-thumbnail2.png";

            const portfolioImage = document.getElementById("portfolioImage");
    if (portfolioImage) portfolioImage.src = "assets/Portfolio_First2.png";
    }

    function setHappyMode() {
        console.log("Switching to Happy Mode...");
        themeStylesheet.href = "styles.css";
        if (linkedinIcon) linkedinIcon.src = "assets/linkedin-icon.png";
        if (itchioIcon) itchioIcon.src = "assets/itchio-icon.png";
        localStorage.setItem("theme", "happy");
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

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem("theme");
    console.log("Saved theme on load:", savedTheme);

    if (savedTheme === "dark") {
        setDarkMode();
    } else {
        setHappyMode();
    }

    // Attach event listeners
    if (happyModeButton) happyModeButton.addEventListener("click", setHappyMode);
    if (darkModeButton) darkModeButton.addEventListener("click", setDarkMode);
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    scrollBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
      ? "block" : "none";
  };

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burgerMenu");
    const navLinks = document.getElementById("navLinks");
    const activePage = document.getElementById("activePage");

    // Toggle menu when clicking burger
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    document.addEventListener("DOMContentLoaded", function () {
    const themeStylesheet = document.getElementById("themeStylesheet");
    const happyModeButton = document.getElementById("happyMode");
    const darkModeButton = document.getElementById("darkMode");

    const linkedinIcon = document.getElementById("linkedin-icon");
    const itchioIcon = document.getElementById("itchio-icon");

    function setDarkMode() {
        console.log("Switching to Dark Mode...");
        themeStylesheet.href = "styles-dark.css";
        if (linkedinIcon) linkedinIcon.src = "assets/linkedin-iconblue.png";
        if (itchioIcon) itchioIcon.src = "assets/itchio-iconblue.png";
        localStorage.setItem("theme", "dark");
        const resumeImage = document.getElementById("resumeImage");
    const resumeLink = document.getElementById("resumeLink");

    if (resumeImage) resumeImage.src = "assets/NaomiJouan_CV_dark.png";
    if (resumeLink) resumeLink.href = "assets/NaomiJouan_CV_dark.pdf";

    const leoncitozeImage = document.getElementById("leoncitozeImage");
    if (leoncitozeImage) leoncitozeImage.src = "assets/Leoncitoze_thumbnail2.png";

        const veilImage = document.getElementById("veilImage");
    if (veilImage)  veilImage.src = "assets/veil-thumbnail2.png";

            const portfolioImage = document.getElementById("portfolioImage");
    if (portfolioImage) portfolioImage.src = "assets/Portfolio_First2.png";
    }

    function setHappyMode() {
        console.log("Switching to Happy Mode...");
        themeStylesheet.href = "styles.css";
        if (linkedinIcon) linkedinIcon.src = "assets/linkedin-icon.png";
        if (itchioIcon) itchioIcon.src = "assets/itchio-icon.png";
        localStorage.setItem("theme", "happy");
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

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem("theme");
    console.log("Saved theme on load:", savedTheme);

    if (savedTheme === "dark") {
        setDarkMode();
    } else {
        setHappyMode();
    }

    // Attach event listeners
    if (happyModeButton) happyModeButton.addEventListener("click", setHappyMode);
    if (darkModeButton) darkModeButton.addEventListener("click", setDarkMode);
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    scrollBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
      ? "block" : "none";
  };

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burgerMenu");
    const navLinks = document.getElementById("navLinks");
    const activePage = document.getElementById("activePage");

    // Toggle menu when clicking burger
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Dynamically update the active page name
    const pageMap = {
        "index.html": "ABOUT",
        "resume.html": "RESUME",
        "videogames.html": "VIDEOGAMES",
        "boardgames.html": "BOARDGAMES",
        "narration.html": "NARRATION"
    };

    const currentPage = window.location.pathname.split("/").pop();
    activePage.textContent = pageMap[currentPage] || "ABOUT";
});

        // Arrow expander
function toggleSkills(trigger) {
  const grid = trigger.nextElementSibling;
  const arrow = trigger.querySelector('.arrow');
  grid.classList.toggle('hidden');
  trigger.classList.toggle('expanded');
}

    // Dynamically update the active page name
    const pageMap = {
        "index.html": "ABOUT",
        "resume.html": "RESUME",
        "videogames.html": "VIDEOGAMES",
        "boardgames.html": "BOARDGAMES",
        "narration.html": "NARRATION"
    };

    const currentPage = window.location.pathname.split("/").pop();
    activePage.textContent = pageMap[currentPage] || "ABOUT";
});


