const STORAGE_KEY = "jd-theme";

// Apply theme using Just the Docs classes
function applyTheme(theme) {
  const body = document.body;

  if (theme === "dark") {
    body.classList.add("js-theme-dark");
    body.classList.remove("js-theme-light");
  } else {
    body.classList.add("js-theme-light");
    body.classList.remove("js-theme-dark");
  }

  localStorage.setItem(STORAGE_KEY, theme);
}

// Get saved or system preference
function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Toggle theme
function toggleTheme() {
  const isDark = document.body.classList.contains("js-theme-dark");
  applyTheme(isDark ? "light" : "dark");
}

// Initialise
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(getInitialTheme());

  const toggle = document.getElementById("theme-toggle");

  if (toggle) {
    toggle.addEventListener("click", toggleTheme);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Theme toggle script loaded");

  const toggle = document.getElementById("theme-toggle");

  console.log("Button:", toggle);

  if (toggle) {
    toggle.addEventListener("click", () => {
      console.log("Clicked!");
    });
  }
});