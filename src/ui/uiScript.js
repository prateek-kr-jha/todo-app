import './body.css';
import { createProfileContent } from './profile/profile.js';
import { createNavElement } from './nav/nav.js';


const container = document.querySelector('.container');

container.appendChild(createProfileContent());
container.appendChild(createNavElement());
