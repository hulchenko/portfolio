import { loadSkills } from "./skills.js";
import { loadProjects } from "./projects.js";
import { useProfilePicToggle } from "./img-toggle.js";
import { useTheme } from "./theme.js";
import { useCarousel } from "./carousel.js";
import { loadIntro } from "./intro.js";
import { useNav } from "./nav.js";

// render data
loadIntro();
loadSkills();
loadProjects();

// enable modules
useNav();
useProfilePicToggle();
useTheme();
useCarousel();
