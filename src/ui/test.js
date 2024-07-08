import { Project } from "../appLogic/taskAndProject.js";
import hash_icon from "../hash.svg";
import { createDivWithClass, createImageWithSource } from './common/commonHelper.js';

let newProject = new Project("project-1", "test");
let newProject2 = new Project("project-2", "test2");


let todoApp = {
    projects: {
        newProject,
        newProject2
    }
}
// console.log(todoApp);
{/* <div class="projects-cntnr">
<div class="project" id="p-1">
    <div class="project-name">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z"/></svg>
        project-1
    </div>
    <div class="task-count">5</div>
</div>

</div> */}


const projectsContainer = document.querySelector(".projects-cntnr");

const projectDiv = createDivWithClass("project");
const projectName = createDivWithClass("project-name");
hash_icon.fill = "#fffff";
projectName.innerText = todoApp.projects.newProject.title;
projectName.appendChild(hash_icon);
const taskCount = createDivWithClass("task-count");
taskCount.innerText = todoApp.projects.newProject.tasks.length;
projectDiv.appendChild(projectName);
projectDiv.appendChild(taskCount);

projectsContainer.appendChild(projectDiv);


// export {
//     todoApp
// }
