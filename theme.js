const toggle = document.querySelector("#theme-toggle");
const container = document.querySelector(".container");

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
  console.log(`is dark ?`, isDark);
  if (isDark) {
    darkDisable();
  } else {
    darkEnable();
  }
};

export const useTheme = () => {
  toggle.addEventListener("click", () => {
    themeToggle();
  });
};
