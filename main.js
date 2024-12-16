import { loadSkills } from "./components/skills.js";
import { loadProjects } from "./components/projects.js";
import { useProfilePicToggle } from "./components/img-toggle.js";
import { useHeaderControls } from "./components/header-controls.js";
import { loadIntro } from "./components/intro.js";

// render data
loadIntro();
loadSkills();
loadProjects();

// enable modules
useProfilePicToggle();
useHeaderControls();
