const skills = [
  {
    name: "JavaScript",
    src: "./imgs/svg/logo-javascript.svg",
    alt: "javascript",
    section: "front-end",
  },
  {
    name: "TypeScript",
    src: "./imgs/svg/typescript.svg",
    alt: "typescript",
    section: "front-end",
  },
  {
    name: "NextJS",
    src: "./imgs/svg/nextjs.svg",
    alt: "nextjs",
    section: "front-end",
  },
  {
    name: "Angular",
    src: "./imgs/svg/angular-logo.svg",
    alt: "angular",
    section: "front-end",
  },
  {
    name: "React",
    src: "./imgs/svg/react-2.svg",
    alt: "react",
    section: "front-end",
  },
  {
    name: "Tailwind CSS",
    src: "./imgs/svg/tailwind.svg",
    alt: "tailwind",
    section: "front-end",
  },
  {
    name: "Bootstrap",
    src: "./imgs/svg/bootstrap-4-logo-svgrepo-com.svg",
    alt: "bootstrap",
    section: "front-end",
  },
  {
    name: "Sass",
    src: "./imgs/svg/sass.svg",
    alt: "sass",
    section: "front-end",
  },
  {
    name: "AWS",
    src: "./imgs/svg/aws-2.svg",
    alt: "aws",
    section: "back-end",
  },
  {
    name: "PostgreSQL",
    src: "./imgs/svg/postgresql.svg",
    alt: "postgresql",
    section: "back-end",
  },
  {
    name: "Python",
    src: "./imgs/svg/python.svg",
    alt: "python",
    section: "back-end",
  },
  {
    name: "Node.js",
    src: "./imgs/svg/nodejs-icon-logo-svgrepo-com.svg",
    alt: "node_js",
    section: "back-end",
  },
  {
    name: "Azure",
    src: "./imgs/svg/azure-1.svg",
    alt: "azure",
    section: "back-end",
  },
  {
    name: "MongoDB",
    src: "./imgs/svg/mongodb.svg",
    alt: "mongodb",
    section: "back-end",
  },
  {
    name: "Xcode",
    src: "./imgs/svg/xcode.svg",
    alt: "xcode",
    section: "misc",
  },
  {
    name: "Android Studio",
    src: "./imgs/svg/android-studio.svg",
    alt: "android-studio",
    section: "misc",
  },
  {
    name: "Jenkins",
    src: "./imgs/svg/jenkins.svg",
    alt: "jenkins",
    section: "misc",
  },
  {
    name: "Firebase",
    src: "./imgs/svg/firebase-2.svg",
    alt: "firebase",
    section: "back-end",
  },
  {
    name: "Linux",
    src: "./imgs/svg/linux-svgrepo-com.svg",
    alt: "linux",
    section: "misc",
  },
  {
    name: "WordPress",
    src: "./imgs/svg/wordpress-blue.svg",
    alt: "wordpress",
    section: "misc",
  },
];

export const loadSkills = () => {
  skills.forEach((skill) => {
    const { name, src, alt, section } = skill;
    const div = document.createElement("div");

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;

    const h5 = document.createElement("h5");
    h5.innerHTML = name;

    div.appendChild(img);
    div.appendChild(h5);

    document.getElementById(`${section}-card`).appendChild(div);
  });
};
