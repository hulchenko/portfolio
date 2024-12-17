const themeIcon = document.getElementById("theme-icon");
const up = document.getElementById("up-icon");
const container = document.getElementById("main-container");

const lightEnable = () => {
  container.classList.add("light");
  localStorage.setItem("lightMode", "enabled");
  toggleThemeIcon(true);
};

const lightDisable = () => {
  container.classList.remove("light");
  localStorage.removeItem("lightMode");
  toggleThemeIcon(false);
};

const toggleThemeIcon = (isLightModeEnabled) => {
  if (isLightModeEnabled) {
    themeIcon.setAttribute("src", "./images/svg/icons/dark-mode.svg");
  } else {
    themeIcon.setAttribute("src", "./images/svg/icons/light-mode.svg");
  }
};

// init load
const isLight = localStorage.getItem("lightMode");
if (isLight) {
  lightEnable();
} else {
  lightDisable();
}

const themeToggle = () => {
  const isLight = localStorage.getItem("lightMode");
  if (isLight) {
    lightDisable();
  } else {
    lightEnable();
  }
};

export const useHeaderControls = () => {
  themeIcon.addEventListener("click", () => themeToggle());
  up.addEventListener("click", () => window.scrollTo(0, 0));
};
