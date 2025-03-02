document.addEventListener("DOMContentLoaded", function () {
    const happyModeBtn = document.getElementById("happyMode");
    const darkModeBtn = document.getElementById("darkMode");

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
        document.getElementById("themeStylesheet").href = "dark.css";
        localStorage.setItem("theme", "dark");
    }

    function setHappyMode() {
        document.getElementById("themeStylesheet").href = "styles.css";
        localStorage.setItem("theme", "happy");
    }
});
