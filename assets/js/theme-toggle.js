const STORAGE_KEY = "theme-preference";

/* Apply theme */
function applyTheme(theme) {
  document.body.classList.toggle("dark-mode", theme === "dark");
}

/* Get preferred theme */
function getPreferredTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/* Save + apply */
function setTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
}

/* Initialise */
document.addEventListener("DOMContentLoaded", () => {
  const theme = getPreferredTheme();
  applyTheme(theme);

  const toggle = document.getElementById("theme-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark-mode");
      setTheme(isDark ? "light" : "dark");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href^='http']");

  links.forEach(link => {
    // Only modify external links
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});