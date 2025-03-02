document.addEventListener("DOMContentLoaded", function () {
    const themeStylesheet = document.getElementById("themeStylesheet");
    const happyModeButton = document.getElementById("happyMode");
    const darkModeButton = document.getElementById("darkMode");

    const linkedinIcon = document.getElementById("linkedin-icon");
    const itchioIcon = document.getElementById("itchio-icon");

    function switchToDarkMode() {
        themeStylesheet.href = "styles-dark.css";
        linkedinIcon.src = "assets/linkedin-iconblue.png"; 
        itchioIcon.src = "assets/itchio-iconblue.png"; 
        localStorage.setItem("theme", "dark");
    }

    function switchToHappyMode() {
        themeStylesheet.href = "styles.css";
        linkedinIcon.src = "assets/linkedin-icon.png"; 
        itchioIcon.src = "assets/itchio-icon.png"; 
        localStorage.setItem("theme", "happy");
    }

    // Apply the correct theme on page load
    if (localStorage.getItem("theme") === "dark") {
        switchToDarkMode();
    } else {
        switchToHappyMode();
    }

    // Attach event listeners
    happyModeButton.addEventListener("click", switchToHappyMode);
    darkModeButton.addEventListener("click", switchToDarkMode);
});
