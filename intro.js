const typewriter = document.getElementById("typewriter");
const background = document.getElementById("intro-bg");

const fillBackground = () => {
  let count = 0;
  while (count < 10) {
    const el = document.createElement("div");
    background.append(el);
    count++;
  }
};

const type = (tag, text, i = 0) => {
  const length = text.length - 1;
  if (i > length) return;

  tag.textContent += text[i];
  setTimeout(() => type(tag, text, i + 1), 120);
};

const loadGreeting = () => {
  const text = "Hey, I'm Vadym.";
  setTimeout(() => type(typewriter, text), 1000);
};

export const loadIntro = () => {
  fillBackground();
  loadGreeting();
};