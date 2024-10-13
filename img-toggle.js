const profilePic = document.querySelector("#profile-pic");

const toggle = () => {
  profilePic.src.includes("solo")
    ? (profilePic.src =
        "https://hulchenko.github.io/portfolio/imgs/together-img.jpg")
    : (profilePic.src =
        "https://hulchenko.github.io/portfolio/imgs/solo-img.jpg");
};

export const useProfilePicToggle = () => {
  profilePic.addEventListener("click", toggle);
};
