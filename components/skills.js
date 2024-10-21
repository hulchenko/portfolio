const skills = [
  {
    name: "JavaScript",
    src: "./images/svg/logo-javascript.svg",
    alt: "javascript",
    section: "front-end",
  },
  {
    name: "TypeScript",
    src: "./images/svg/typescript.svg",
    alt: "typescript",
    section: "front-end",
  },
  {
    name: "Angular",
    src: "./images/svg/angular-logo.svg",
    alt: "angular",
    section: "front-end",
  },
  {
    name: "React",
    src: "./images/svg/react-2.svg",
    alt: "react",
    section: "front-end",
  },
  {
    name: "NextJS",
    src: "./images/svg/nextjs.svg",
    alt: "nextjs",
    section: "front-end",
  },
  {
    name: "Tailwind CSS",
    src: "./images/svg/tailwind.svg",
    alt: "tailwind",
    section: "front-end",
  },
  {
    name: "AWS",
    src: "./images/svg/aws-2.svg",
    alt: "aws",
    section: "back-end",
  },
  {
    name: "PostgreSQL",
    src: "./images/svg/postgresql.svg",
    alt: "postgresql",
    section: "back-end",
  },
  {
    name: "Node.js",
    src: "./images/svg/nodejs-icon-logo-svgrepo-com.svg",
    alt: "node_js",
    section: "back-end",
  },
  {
    name: "Express.js",
    src: "./images/svg/express-js.svg",
    alt: "express_js",
    section: "back-end",
  },
  {
    name: "Python",
    src: "./images/svg/python.svg",
    alt: "python",
    section: "back-end",
  },
  {
    name: "MongoDB",
    src: "./images/svg/mongodb.svg",
    alt: "mongodb",
    section: "back-end",
  },
  {
    name: "Firebase",
    src: "./images/svg/firebase-2.svg",
    alt: "firebase",
    section: "back-end",
  },
  {
    name: "Azure",
    src: "./images/svg/azure-1.svg",
    alt: "azure",
    section: "back-end",
  },
  {
    name: "Xcode",
    src: "./images/svg/xcode.svg",
    alt: "xcode",
    section: "misc",
  },
  {
    name: "Android Studio",
    src: "./images/svg/android-studio.svg",
    alt: "android-studio",
    section: "misc",
  },
  {
    name: "Jenkins",
    src: "./images/svg/jenkins.svg",
    alt: "jenkins",
    section: "misc",
  },
  {
    name: "Linux",
    src: "./images/svg/linux-svgrepo-com.svg",
    alt: "linux",
    section: "misc",
  },
  {
    name: "WordPress",
    src: "./images/svg/wordpress-blue.svg",
    alt: "wordpress",
    section: "misc",
  },
];

export const loadSkills = () => {
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
