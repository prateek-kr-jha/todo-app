import './body.css';
import { createProfileContent } from './profile/profile.js';
import { createNavElement } from './nav/nav.js';
import { createSidebar, sidebarEffectHandler } from './sidebar/sidebar.js';


const container = document.querySelector('.container');

container.appendChild(createProfileContent());
container.appendChild(createNavElement());
container.appendChild(createSidebar());
sidebarEffectHandler();

// const search = document.querySelector('.search-cntnr');

// search.addEventListener("click", (e) => {
//     console.log(e.currentTarget);
//     const div1 = e.currentTarget;
//     // div1.children.forEach(element => {
//     //     console.log(element);
//     // });
//     let children = div1.children;
//     div1.style.backgroundColor = "#472525";

//     for(let i = 0; i < children.length; i++) {
//         console.log(children[i]);
//         if(children[i].src) {
//             children[i].src = "/home/prime/Documents/odin/todo-app/src/ui/sidebar/img/searchRed.svg";
//         }
//         if(children[i].nodeName == 'DIV') {
//             children[i].style.color = "#de4c4a";
//         }
//         console.log(children[i].nodeName, "----------------");
//     }
// })
