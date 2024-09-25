import "../body.css";
import "./profile.css";
import profile_circle from "./img/profile_circle.svg";
import side_bar from "./img/sidebar.svg";
import {
  createDivWithClass,
  createImageWithSource,
} from "../common/commonHelper";

// const container = document.querySelector('.container');

function createProfileContent() {
  const profile = createDivWithClass("profile");

  const userDetailContainer = createDivWithClass("user-detail-cntnr");
  const profileImg = createImageWithSource(profile_circle);
  profileImg.classList.add("profile-image");
  userDetailContainer.appendChild(profileImg);
  const profileName = createDivWithClass("profile-name");
  profileName.innerText = "User";
  userDetailContainer.appendChild(profileName);
  profile.appendChild(userDetailContainer);

  const sideBar = createImageWithSource(side_bar);
  sideBar.classList.add("sidebar-icon");

  profile.appendChild(sideBar);

  return profile;
}

// container.appendChild(createProfileContent());

export { createProfileContent };
