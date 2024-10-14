// TODO
const carousel = document.getElementById("carousel-container");

const projects = [
  {
    src: "./images/carousel/calorie-tracker.png",
    title: "Calorie Tracker",
    tools: "TypeScript, NextJS, Tailwind, Neon PostgreSQL, Chakra UI",
    description:
      "Allows you to track your daily and weekly calorie intake and manage your health goals. Auth control with profile management.",
    code: "https://github.com/hulchenko/nextjs-calorie-tracker",
    demo: "https://nextjs-calorie-tracker-woad.vercel.app/",
  },
  // {
  //   src: "./images/carousel/boombox.jpg",
  //   title: "BoomBox App",
  //   tools: "React, SASS",
  //   description:
  //     "Play/pause/skip/skip-back/auto-play functionality. Nav bar 'Library', with responsive on-click functionality to switch songs. Mobile friendly.",
  //   code: "https://github.com/hulchenko/react-music-app",
  //   demo: "https://kind-aryabhata-44a21e.netlify.app/",
  // },
  // {
  //   src: "./images/carousel/file-upload.jpg",
  //   title: "Image File Uploader",
  //   tools: "Node.js, Firebase",
  //   description:
  //     "Image Uploading plugin. Upload, view, delete items. Multiple choice support. Loading bar, description field. Supports PNG, JPG, JPEG types.",
  //   code: "https://github.com/hulchenko/file-uploader",
  //   demo: "https://vigorous-wright-e2ac02.netlify.app/",
  // },
  // {
  //   src: "./images/carousel/covid-tracker.jpg",
  //   title: "Covid-19 Tracker",
  //   tools: "Vue, Tailwind",
  //   description:
  //     "Fetching worldwide current Covid-19 data from https://covid19api.com/. Responsive, with drop down country choice. Data is updated multiple times a day.",
  //   code: "https://github.com/hulchenko/vue-covid-19",
  //   demo: "https://relaxed-thompson-7bcbce.netlify.app/",
  // },
  {
    src: "./images/carousel/etch-a-sketch.jpg",
    title: "Etch-A-Sketch",
    tools: "JS, CSS, HTML",
    description:
      "Good old Etch-A-Sketch game, but improved! Supports grid selection(1-100). Random color support (Rainbow option). Reset button to start anew.",
    code: "https://github.com/hulchenko/etch-a-sketch-project",
    demo: "https://hulchenko.github.io/etch-a-sketch-project/",
  },
  {
    src: "./images/carousel/calculator.jpg",
    title: "Calculator",
    tools: "JS, CSS, HTML",
    description:
      "Default calculator. Backspace button support. Various tweaks to match the real calculator behavior.",
    code: "https://github.com/hulchenko/calculator-project",
    demo: "https://hulchenko.github.io/calculator-project/",
  },
  // {
  //   src: "./images/carousel/mortgage-calculator.jpg",
  //   title: "Mortgage Calculator",
  //   tools: "React, CSS, API",
  //   description:
  //     "Loan calculator with various calculating functionalities. Friendly daily advises fetched from API.",
  //   code: "https://github.com/hulchenko/mortgage-calculator",
  //   demo: "https://hulchenko.github.io/mortgage-calculator",
  // },
];

export const loadProjects = () => {
  projects.forEach((project) => {
    const { src, title, tools, description, code, demo } = project;

    const div = document.createElement("div");
    div.className = "carousel-card";

    const img = document.createElement("img");
    img.src = src;

    const h2 = document.createElement("h2");
    h2.innerHTML = title;

    const h5 = document.createElement("h5");
    h5.innerHTML = tools;

    const p = document.createElement("p");
    p.innerHTML = description;

    const codeLink = document.createElement("a");
    codeLink.className = "carousel-button-one";
    codeLink.href = code;
    codeLink.innerText = "Code";
    codeLink.target = "_blank";

    const demoLink = document.createElement("a");
    demoLink.className = "carousel-button-two";
    demoLink.href = demo;
    demoLink.innerText = "Demo";
    demoLink.target = "_blank";

    div.append(img, h2, h5, p, codeLink, demoLink);
    carousel.appendChild(div);
  });
};
