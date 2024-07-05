import '../body.css';
import './style/profile.css';
import profile_circle from './img/profile_circle.svg';
import side_bar from './img/sidebar.svg';

const container = document.querySelector('.container');

function createProfileContent() {
    const profile = document.createElement('div');
    profile.classList.add('profile');

    const userDetailContainer = document.createElement('div');
    userDetailContainer.classList.add('user-detail-cntnr');
    const profileImg = new Image();
    profileImg.src = profile_circle;
    profileImg.classList.add('profile-image');
    userDetailContainer.appendChild(profileImg);
    const profileName = document.createElement('div');
    profileName.classList.add('./profile-name');
    profileName.innerText = 'User';
    userDetailContainer.appendChild(profileName);
    profile.appendChild(userDetailContainer);

    const sideBar = new Image();
    sideBar.src = side_bar;
    sideBar.classList.add('sidebar');
    // sideBar.src = './sidebar.svg';
    profile.appendChild(sideBar);

    return profile;
}

container.appendChild(createProfileContent());