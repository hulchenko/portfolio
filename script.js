const themeToggle = document.querySelector('#theme-toggle');
const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle');
const buttonUp = document.querySelector('.button-up');

//Set Dark theme
themeToggle.addEventListener('click', () => {
  container.classList.toggle('theme');
});

//Navigation Bar Toggle
toggle.addEventListener('click', (event) => {
  console.log(event.target);
});

//Back to Top Button
buttonUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
