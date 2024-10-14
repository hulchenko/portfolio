import { loadSkills } from "./components/skills.js";
import { loadProjects } from "./components/projects.js";
import { useProfilePicToggle } from "./components/img-toggle.js";
import { useTheme } from "./components/theme.js";
import { useCarousel } from "./components/carousel.js";
import { loadIntro } from "./components/intro.js";
import { useNav } from "./components/nav.js";

// render data
loadIntro();
loadSkills();
loadProjects();

// enable modules
useNav();
useProfilePicToggle();
useTheme();
useCarousel();
