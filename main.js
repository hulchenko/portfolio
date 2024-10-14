import { loadSkills } from "./components/skills.js";
import { loadProjects } from "./components/projects.js";
import { useProfilePicToggle } from "./components/img-toggle.js";
import { useHeader } from "./components/header-controls.js";
import { useCarousel } from "./components/carousel.js";
import { loadIntro } from "./components/intro.js";

// render data
loadIntro();
loadSkills();
loadProjects();

// enable modules
useProfilePicToggle();
useHeader();
useCarousel();
