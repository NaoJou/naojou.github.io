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
    const burger = document.getElementById("burgerMenu");
    const mobileNav = document.getElementById("mobileNav");

    if (burger && mobileNav) {
        burger.addEventListener("click", () => {
            mobileNav.classList.toggle("show");
        });

        // Close menu when clicking outside of it
        document.addEventListener("click", (e) => {
            if (!mobileNav.contains(e.target) && e.target !== burger) {
                mobileNav.classList.remove("show");
            }
        });
    }
});

