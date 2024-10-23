const getProjects = async () => {
  const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  const path = isLocal ? "./../data/projects.json" : "/portfolio/data/projects.json";
  const response = await fetch(path);
  const data = await response.json();
  return data;
};

export const loadProjects = async () => {
  const projects = await getProjects();
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
    codeLink.classList = "carousel-button code";
    codeLink.href = code;
    codeLink.innerText = "Code";
    codeLink.target = "_blank";

    const demoLink = document.createElement("a");
    demoLink.classList = "carousel-button demo";
    demoLink.href = demo;
    demoLink.innerText = "Demo";
    demoLink.target = "_blank";

    div.append(img, h2, h5, p, codeLink, demoLink);
    document.getElementById("carousel-container").appendChild(div);
  });
};
