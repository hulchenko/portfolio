const themeToggle = document.querySelector('#theme-toggle');
const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle');
const buttonUp = document.querySelector('.button-up');
const greeting = document.querySelector('.greeting');
const navDisable = document.querySelector('.fa-times');
const navigation = document.querySelector('.navigation');
const logo = document.querySelector('.logo');

//Set Dark theme
themeToggle.addEventListener('click', () => {
  container.classList.toggle('theme');
});

//Navigation Bar Toggle
toggle.addEventListener('click', (event) => {
  navigation.classList.remove('close');
});

navDisable.addEventListener('click', (event) => {
  navigation.classList.add('close');
});

//Back to Top
buttonUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

logo.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

//Typed Animation
const typed = new Typed(greeting, {
  strings: [
    'Hello!^2000<br>My name is Vadym^1000<br>and I love coding!',
    'Hello!<br>Welcome to My Portfolio!',
  ],
  typeSpeed: 90,
  backSpeed: 90,
  smartBackspace: true,
  showCursor: false,
});

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
