const themeToggle = document.querySelector('#theme-toggle');
const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle');
const buttonUp = document.querySelector('.button-up');
const navDisable = document.querySelector('.fa-times');
const navigation = document.querySelector('.navigation');
const logo = document.querySelector('.logo');
const intro = document.querySelector('.intro');
const greeting = document.querySelector('.greeting');

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
    'Hello!^2000<br>My name is Vadym^1000<br>and I love coding!',
    'Hello!<br>Welcome to My Portfolio!',
  ],
  typeSpeed: 90,
  backSpeed: 90,
  smartBackspace: true,
  showCursor: false,
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
  greeting.style.textShadow = `${xDistance}px ${yDistance}px 20px #fff`;
}
intro.addEventListener('mousemove', shadow);
