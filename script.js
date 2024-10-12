import { loadSkills } from "./skills.js";

const themeToggle = document.querySelector("#theme-toggle");
const container = document.querySelector(".container");
//nav
const toggle = document.querySelector(".toggle");
const navDisable = document.querySelector(".fa-times");
const navigation = document.querySelector(".navigation");
//intro
const intro = document.querySelector(".intro");
const greeting = document.querySelector(".greeting");

//about
const profilePic = document.querySelector("#profile-pic");
//carousel vars
const carousel = document.querySelector(".carousel");
const carouselImages = document.querySelectorAll(".carousel img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Set Dark theme

//Dark Theme Local Storage
let darkMode = localStorage.getItem("darkMode");

//enable
const themeEnable = () => {
  container.classList.add("theme");
  localStorage.setItem("darkMode", "enabled");
};

//disable
const themeDisable = () => {
  container.classList.remove("theme");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  //keep current selected theme on next load
  themeEnable();
}

themeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode"); //update var on every event
  if (darkMode !== "enabled") {
    themeEnable();
  } else {
    themeDisable();
  }
});

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
    "Hello!^1000",
    "Welcome!",
    "Bienvenue!",
    "Добро Пожаловать!",
    "Willkommen!",
    "¡Bienvenido!",
    "Välkommen!",
    "Witaj!",
    "أهلا بك ",
    "欢迎 ",
    "ברוך הבא ",
    "स्वागत हे",
    "ようこそ",
    "환영",
    "Maligayang Pagdating!",
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

//Image flip toggle

profilePic.addEventListener("click", () => {
  profilePic.src.includes("solo")
    ? (profilePic.src =
        "https://hulchenko.github.io/portfolio/imgs/together-img.jpg")
    : (profilePic.src =
        "https://hulchenko.github.io/portfolio/imgs/solo-img.jpg");
});

//carousel
let counter = 1;
carousel.style.transform = "translateX(" + -750 * counter + "px)"; //default position

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carousel.style.transition = "transform 1s ease-in-out";
  counter++;
  carousel.style.transform = "translateX(" + -750 * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carousel.style.transition = "transform 1s ease-in-out";
  counter--;
  carousel.style.transform = "translateX(" + -750 * counter + "px)";
});

carousel.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carousel.style.transition = "none";
    counter = carouselImages.length - 2;
    carousel.style.transform = "translateX(" + -750 * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carousel.style.transition = "none";
    counter = carouselImages.length - counter;
    carousel.style.transform = "translateX(" + -750 * counter + "px)";
  }
});

//button animation, disabled due to compatibility with Safari(fixed with onclick="void(0);")

nextBtn.addEventListener("click", () => {
  nextBtn.style.transform = "rotate(360deg)";
  nextBtn.style.transition = "transform 1s ease-out";
  nextBtn.addEventListener("transitionend", () => {
    nextBtn.style.transform = null;
    nextBtn.style.transition = null;
  });
});

prevBtn.addEventListener("click", () => {
  prevBtn.style.transform = "rotate(-360deg)";
  prevBtn.style.transition = "transform 1s ease-out";
  prevBtn.addEventListener("transitionend", () => {
    prevBtn.style.transform = null;
    prevBtn.style.transition = null;
  });
});

loadSkills();
