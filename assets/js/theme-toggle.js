const STORAGE_KEY = "jd-theme";

function applyTheme(theme) {
  const body = document.body;

  // Remove both first
  body.classList.remove("js-theme-dark", "js-theme-light");

  if (theme === "dark") {
    body.classList.add("js-theme-dark");
  } else {
    body.classList.add("js-theme-light");
  }

  // Force repaint (important for some Just the Docs builds)
  body.style.display = "none";
  body.offsetHeight; // trigger reflow
  body.style.display = "";

  localStorage.setItem(STORAGE_KEY, theme);
}

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(getInitialTheme());

  const toggle = document.getElementById("theme-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = document.body.classList.contains("js-theme-dark");
      applyTheme(isDark ? "light" : "dark");
    });
  }
});