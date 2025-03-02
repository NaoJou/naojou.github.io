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
    }

    function setHappyMode() {
        console.log("Switching to Happy Mode...");
        themeStylesheet.href = "styles.css";
        if (linkedinIcon) linkedinIcon.src = "assets/linkedin-icon.png";
        if (itchioIcon) itchioIcon.src = "assets/itchio-icon.png";
        localStorage.setItem("theme", "happy");
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
