const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const projects = document.getElementsByClassName("carousel-card");

let currIdx = 0; // init

const slide = (dir) => {
  currIdx = (currIdx + dir + projects.length) % projects.length;

  for (let i = 0; i < projects.length; i++) {
    projects[i].style.display = "none";
  }
  projects[currIdx].style.display = "block";
};

export const useCarousel = () => {
  nextBtn.addEventListener("click", () => slide(1));
  prevBtn.addEventListener("click", () => slide(-1));
};
