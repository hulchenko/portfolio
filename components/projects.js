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
    const { src, title, tools, description, size, code, demo } = project;

    // Card content
    const cardHeader = document.createElement("div");
    cardHeader.className = "project-card-header";

    const cardImg = document.createElement("div");
    cardImg.className = "project-card-img";
    cardImg.style.backgroundImage = `url(${src})`;
    cardHeader.appendChild(cardImg);

    const cardText = document.createElement("div");
    cardText.className = "project-card-text";
    const h3 = document.createElement("h3");
    h3.innerHTML = title;
    const descP = document.createElement("p");
    descP.innerHTML = description;
    const toolsP = document.createElement("h5");
    toolsP.innerHTML = tools;
    cardText.append(h3, descP, toolsP);
    cardHeader.appendChild(cardText);

    const cardFooter = document.createElement("div");
    cardFooter.className = "project-card-footer";

    const codeBtn = document.createElement("a");
    codeBtn.classList = "project-card-button";
    codeBtn.href = code;
    codeBtn.innerText = "Code";
    codeBtn.target = "_blank";

    const demoBtn = document.createElement("a");
    demoBtn.classList = "project-card-button";
    demoBtn.href = demo;
    demoBtn.innerText = "Demo";
    demoBtn.target = "_blank";

    cardFooter.append(codeBtn, demoBtn);

    // Card wrapper
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.append(cardHeader, cardFooter);

    // Split projects into the appropriate row
    const mainRow = document.querySelector(".main-project-row");
    const smallRow = document.querySelector(".small-project-row");

    if (size === "small") {
      smallRow.appendChild(projectCard);
    } else {
      mainRow.appendChild(projectCard);
    }

    document.querySelector(".projects-grid").append(mainRow, smallRow);
  });
};
