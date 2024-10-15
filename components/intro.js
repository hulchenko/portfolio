const typewriter = document.getElementById("typewriter");
const background = document.getElementById("intro-bg");
const bio = document.getElementById("bio");
const img = document.getElementById("profile-pic");

const bgElements = [
  { top: "12%", left: "42%", duration: "6s" },
  { top: "70%", left: "50%", duration: "7s" },
  { top: "17%", left: "6%", duration: "8s" },
  { top: "20%", left: "60%", duration: "15s" },
  { top: "67%", left: "10%", duration: "6s" },
  { top: "80%", left: "70%", duration: "12s" },
  { top: "60%", left: "80%", duration: "15s" },
  { top: "32%", left: "25%", duration: "16s" },
  { top: "90%", left: "25%", duration: "9s" },
  { top: "20%", left: "80%", duration: "5s" },
];

const fillBackground = () => {
  for (const element of bgElements) {
    const { top, left, duration } = element;
    const el = document.createElement("div");

    el.style.top = top;
    el.style.left = left;
    el.style.animation = `animate ${duration} linear infinite`;

    background.append(el);
  }
};

const type = (tag, text, i = 0) => {
  const length = text.length - 1;
  if (i > length) {
    bio.classList.add("show");
    img.classList.add("show");
    return;
  }

  tag.textContent += text[i];
  setTimeout(() => type(tag, text, i + 1), 120);
};

const loadGreeting = () => {
  const typeText = "Hey, I'm Vadym.";
  setTimeout(() => type(typewriter, typeText), 1000);
};

export const loadIntro = () => {
  fillBackground();
  loadGreeting();
};
