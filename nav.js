const navShow = document.querySelector(".nav-show");
const navHide = document.querySelector(".nav-hide");
const navigation = document.querySelector(".navigation");

export const useNav = () => {
  // Toggle navigation visibility
  navShow.addEventListener("click", () =>
    navigation.classList.remove("hidden")
  );
  navHide.addEventListener("click", () => navigation.classList.add("hidden"));

  // Scroll to top
  document
    .querySelector(".logo")
    .addEventListener("click", () => window.scrollTo(0, 0));
  document
    .querySelector("#home")
    .addEventListener("click", () => window.scrollTo(0, 0));
};
