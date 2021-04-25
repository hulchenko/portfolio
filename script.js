const themeToggle = document.querySelector('#theme-toggle');
const container = document.querySelector('.container');
//nav
const toggle = document.querySelector('.toggle');
const navDisable = document.querySelector('.fa-times');
const navigation = document.querySelector('.navigation');
//intro
const intro = document.querySelector('.intro');
const greeting = document.querySelector('.greeting');

//about
const profilePic = document.querySelector("img[src='./imgs/portfolio-img.jpg'");
//carousel vars
const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Set Dark theme
themeToggle.addEventListener('click', () => {
  container.classList.toggle('theme');
});

//Navigation Bar Toggle
toggle.addEventListener('click', () => {
  navigation.classList.remove('close');
});

navDisable.addEventListener('click', () => {
  navigation.classList.add('close');
});

//Back to Top
document.querySelector('.button-up').addEventListener('click', () => {
  window.scrollTo(0, 0);
});

document.querySelector('.logo').addEventListener('click', () => {
  window.scrollTo(0, 0);
});

document.querySelector('#home').addEventListener('click', () => {
  window.scrollTo(0, 0);
});

//Typed Animation

//Alternative Version
// var i = 0;
// var txt = 'Hello!I am Vadym. Welcome to My Portfolio!';
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

const typed = new Typed(greeting, {
  strings: [
    'Hello!^1000',
    'Welcome!',
    'Bienvenue!',
    'Добро Пожаловать!',
    'Willkommen!',
    '¡Bienvenido!',
    'Välkommen!',
    'Witaj!',
    'أهلا بك ',
    '欢迎 ',
    'ברוך הבא ',
    'स्वागत हे',
    'ようこそ',
    '환영',
    'Maligayang Pagdating',
  ],
  typeSpeed: 70,
  backSpeed: 30,
  smartBackspace: true,
  showCursor: false,
  loop: true,
});

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
intro.addEventListener('mousemove', shadow);

//Image flip toggle
profilePic.addEventListener('click', () => {
  profilePic.src.slice(21) === '/imgs/portfolio-img.jpg'
    ? (profilePic.src = '/imgs/together-img.jpg')
    : (profilePic.src = '/imgs/portfolio-img.jpg');
});

//removed . before each line + first one : '.' + profilePic.src.slice(21) === '/imgs/portfolio-img.jpg'

//carousel
let counter = 1;
carousel.style.transform = 'translateX(' + -750 * counter + 'px)'; //default position

nextBtn.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  carousel.style.transition = 'transform 1s ease-in-out';
  counter++;
  carousel.style.transform = 'translateX(' + -750 * counter + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carousel.style.transition = 'transform 1s ease-in-out';
  counter--;
  carousel.style.transform = 'translateX(' + -750 * counter + 'px)';
});

carousel.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
    carousel.style.transition = 'none';
    counter = carouselImages.length - 2;
    carousel.style.transform = 'translateX(' + -750 * counter + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone') {
    carousel.style.transition = 'none';
    counter = carouselImages.length - counter;
    carousel.style.transform = 'translateX(' + -750 * counter + 'px)';
  }
});

nextBtn.addEventListener('click', () => {
  nextBtn.style.transform = 'rotate(360deg)';
  nextBtn.style.transition = 'transform 1s ease-out';
  nextBtn.addEventListener('transitionend', () => {
    nextBtn.style.transform = null;
    nextBtn.style.transition = null;
  });
});

prevBtn.addEventListener('click', () => {
  prevBtn.style.transform = 'rotate(-360deg)';
  prevBtn.style.transition = 'transform 1s ease-out';
  prevBtn.addEventListener('transitionend', () => {
    prevBtn.style.transform = null;
    prevBtn.style.transition = null;
  });
});
