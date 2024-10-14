const theme = document.getElementById("theme");
const themeIcon = document.getElementById("theme-icon");
const up = document.getElementById("up");
const container = document.getElementById("main-container");

const darkEnable = () => {
  container.classList.add("dark");
  localStorage.setItem("darkMode", "enabled");
  toggleThemeIcon(true);
};

const darkDisable = () => {
  container.classList.remove("dark");
  localStorage.removeItem("darkMode");
  toggleThemeIcon(false);
};

const toggleThemeIcon = (isDarkModeEnabled) => {
  themeIcon.className = isDarkModeEnabled
    ? "fas fa-toggle-on"
    : "fas fa-toggle-off";
};

// init load
const isDark = localStorage.getItem("darkMode");
if (isDark) {
  darkEnable();
} else {
  darkDisable();
}

const themeToggle = () => {
  const isDark = localStorage.getItem("darkMode");
  if (isDark) {
    darkDisable();
  } else {
    darkEnable();
  }
};

export const useHeaderControls = () => {
  theme.addEventListener("click", () => {
    themeToggle();
  });
  up.addEventListener("click", () => window.scrollTo(0, 0));
};
