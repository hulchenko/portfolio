import { loadSkills } from "./skills.js";
import { loadProjects, totalProjects } from "./projects.js";
import { useProfilePicToggle } from "./img-toggle.js";
import { useTheme } from "./theme.js";
import { useCarousel } from "./carousel.js";

// console.log(`TOTAL: `, totalProjects); // TODO pass it in as argument maybe, otherwise it's a circular dependency

//nav
const toggle = document.querySelector(".toggle");
const navDisable = document.querySelector(".fa-times");
const navigation = document.querySelector(".navigation");
//intro
const intro = document.querySelector(".intro");
const greeting = document.querySelector(".greeting");

//Navigation Bar Toggle
toggle.addEventListener("click", () => {
  navigation.classList.remove("close");
});

navDisable.addEventListener("click", () => {
  navigation.classList.add("close");
});

//Back to Top
document.querySelector(".button-up").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

document.querySelector(".logo").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

document.querySelector("#home").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

//Typed Animation

const typed = new Typed(greeting, {
  strings: [
    " Welcome!",
    " Bienvenue!",
    " Добро Пожаловать!",
    " Willkommen!",
    " ¡Bienvenido!",
    " Välkommen!",
    " Witaj!",
    " أهلا بك ",
    " 欢迎 ",
    " ברוך הבא ",
    " स्वागत हे",
    " ようこそ",
    " 환영",
    " Maligayang Pagdating!",
  ],
  typeSpeed: 70,
  backSpeed: 30,
  smartBackspace: true,
  showCursor: false,
  loop: true,
});

//Alternative pure JS Version

// var i = 0;
// var txt = 'Hello! I am Vadym. Welcome to My Portfolio!';
// var speed = 100;

// function typeWriter() {
//   if (i < txt.length) {
//     greeting.innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// window.onload = function () {
//   typeWriter();
// };

//Dynamic Shadow
const distance = 15;
function shadow(e) {
  let height = intro.offsetHeight;
  let width = intro.offsetWidth;

  let x = e.offsetX;
  let y = e.offsetY;

  if (this !== e.target) {
    //make shadow align with the title on hover
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xDistance = Math.round((x / width) * distance - distance / 2);
  const yDistance = Math.round((y / height) * distance - distance / 2);
  greeting.style.textShadow = `${xDistance}px ${yDistance}px 5px #111`;
}
intro.addEventListener("mousemove", shadow);

loadSkills();
loadProjects();
useProfilePicToggle(); // allow profile image toggle
useTheme();
useCarousel();
