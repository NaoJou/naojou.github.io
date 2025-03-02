document.addEventListener("DOMContentLoaded", function () {
    const themeStylesheet = document.getElementById("themeStylesheet");
    const happyModeButton = document.getElementById("happyMode");
    const darkModeButton = document.getElementById("darkMode");

    const linkedinIcon = document.getElementById("linkedin-icon");
    const itchioIcon = document.getElementById("itchio-icon");

    function switchToDarkMode() {
        themeStylesheet.href = "dark-styles.css";
        linkedinIcon.src = "assets/linkedin-iconblue.png"; 
        itchioIcon.src = "assets/itchio-iconblue.png"; 
    }

    function switchToHappyMode() {
        themeStylesheet.href = "styles.css";
        linkedinIcon.src = "assets/linkedin-icon.png"; 
        itchioIcon.src = "assets/itchio-icon.png"; 
    }

    happyModeButton.addEventListener("click", switchToHappyMode);
    darkModeButton.addEventListener("click", switchToDarkMode);

    // Check saved mode in localStorage
    if (localStorage.getItem("theme") === "dark") {
        setDarkMode();
    }

    // Switch to Dark Mode
    darkModeBtn.addEventListener("click", function () {
        setDarkMode();
    });

    // Switch to Happy Mode
    happyModeBtn.addEventListener("click", function () {
        setHappyMode();
    });

    function setDarkMode() {
        document.getElementById("themeStylesheet").href = "styles-dark.css";
        localStorage.setItem("theme", "dark");
    }

    function setHappyMode() {
        document.getElementById("themeStylesheet").href = "styles.css";
        localStorage.setItem("theme", "happy");
    }
});
