const profilePic = document.querySelector("#profile-pic");

const toggle = () => {
  profilePic.src.includes("solo")
    ? (profilePic.src =
        "https://hulchenko.github.io/portfolio/images/profile/together-img.jpg")
    : (profilePic.src =
        "https://hulchenko.github.io/portfolio/images/profile/solo-img.jpg");
};

export const useProfilePicToggle = () => {
  profilePic.addEventListener("click", toggle);
};
