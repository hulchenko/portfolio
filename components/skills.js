const getSkills = async () => {
  const response = await fetch("./../data/skills.json");
  const data = await response.json();
  return data;
};

export const loadSkills = async () => {
  const skills = await getSkills();
  skills.forEach((skill) => {
    const { name, src, alt, section } = skill;

    const div = document.createElement("div");
    div.className = "skill";

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;

    const h5 = document.createElement("h5");
    h5.innerHTML = name;

    div.append(img, h5);

    document.getElementById(`${section}-row`).appendChild(div);
  });
};
