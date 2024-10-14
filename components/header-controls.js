const theme = document.getElementById("theme");
const up = document.getElementById("up");
const container = document.getElementById("main-container");

const darkEnable = () => {
  container.classList.add("dark");
  localStorage.setItem("darkMode", "enabled");
};

const darkDisable = () => {
  container.classList.remove("dark");
  localStorage.removeItem("darkMode");
};

// init load
const isDark = localStorage.getItem("darkMode");
if (isDark) darkEnable();

const themeToggle = () => {
  const isDark = localStorage.getItem("darkMode");
  if (isDark) {
    darkDisable();
  } else {
    darkEnable();
  }
};

export const useHeader = () => {
  theme.addEventListener("click", () => {
    themeToggle();
  });
  up.addEventListener("click", () => window.scrollTo(0, 0));
};
