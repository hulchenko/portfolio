const carousel = document.getElementById("carousel-container");

const projects = [
  {
    src: "./imgs/carousel/1.jpg",
    title: "BoomBox App",
    tools: "React, SASS",
    description:
      "Play/pause/skip/skip-back/auto-play functionality. Nav bar 'Library', with responsive on-click functionality to switch songs. Mobile friendly.",
    code: "https://github.com/hulchenko/react-music-app",
    demo: "https://kind-aryabhata-44a21e.netlify.app/",
  },
  {
    src: "./imgs/carousel/2.jpg",
    title: "Image File Uploader",
    tools: "Node.js, Firebase",
    description:
      "Image Uploading plugin. Upload, view, delete items. Multiple choice support. Loading bar, description field. Supports PNG, JPG, JPEG types.",
    code: "https://github.com/hulchenko/file-uploader",
    demo: "https://vigorous-wright-e2ac02.netlify.app/",
  },
  {
    src: "./imgs/carousel/3.jpg",
    title: "Covid-19 Tracker",
    tools: "Vue, Tailwind",
    description:
      "Fetching worldwide current Covid-19 data from https://covid19api.com/. Responsive, with drop down country choice. Data is updated multiple times a day.",
    code: "https://github.com/hulchenko/vue-covid-19",
    demo: "https://relaxed-thompson-7bcbce.netlify.app/",
  },
  {
    src: "./imgs/carousel/4.jpg",
    title: "Etch-A-Sketch",
    tools: "JS, CSS, HTML",
    description:
      "Good old Etch-A-Sketch game, but improved! Supports grid selection(1-100). Random color support (Rainbow option). Reset button to start anew.",
    code: "https://github.com/hulchenko/etch-a-sketch-project",
    demo: "https://hulchenko.github.io/etch-a-sketch-project/",
  },
  {
    src: "./imgs/carousel/5.jpg",
    title: "Calculator",
    tools: "JS, CSS, HTML",
    description:
      "Default calculator. Backspace button support. Various tweaks to match the real calculator behavior.",
    code: "https://github.com/hulchenko/calculator-project",
    demo: "https://hulchenko.github.io/calculator-project/",
  },
  {
    src: "./imgs/carousel/6.jpg",
    title: "Mortgage Calculator",
    tools: "React, CSS, API",
    description:
      "Loan calculator with various calculating functionalities. Friendly daily advises fetched from API.",
    code: "https://github.com/hulchenko/mortgage-calculator-produce8",
    demo: "https://hulchenko.github.io/mortgage-calculator-produce8/",
  },
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

    const demoLink = document.createElement("a");
    demoLink.className = "carousel-button-two";
    demoLink.href = demo;
    demoLink.innerText = "Demo";

    div.append(img, h2, h5, p, codeLink, demoLink);
    carousel.appendChild(div);
  });
};
