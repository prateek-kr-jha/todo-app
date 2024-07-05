import './body.css';
import { createProfileContent } from './profile/profile.js';
import { createNavElement } from './nav/nav.js';
import { createSidebar } from './sidebar/sidebar.js';


const container = document.querySelector('.container');

container.appendChild(createProfileContent());
container.appendChild(createNavElement());
container.appendChild(createSidebar());
