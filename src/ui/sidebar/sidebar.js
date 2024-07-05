import './sidebar.css';
import { createDivWithClass,createImageWithSource } from '../common/commonHelper';
import add_icon from './img/add.svg';

function createAddTask() {
    const addTaskContainer = createDivWithClass("add-task-cntnr");
    const addIcon = createImageWithSource(add_icon);
    addIcon.classList.add('add-btn');
    addTaskContainer.appendChild(addIcon);
    const addTaskText = createDivWithClass('add-tsk-txt');
    addTaskText.innerText = 'Add Task';
    addTaskContainer.appendChild(addTaskText);

    return addTaskContainer;
}


function createBasicCategories() {
    const basicCategories = createDivWithClass('basic-categories');


    return basicCategories;
}

function createProjectDisplay() {
    const projectDisplay = createDivWithClass('projects');

    return projectDisplay;
}

function createSidebar() {
    const sideBar = createDivWithClass('sidebar');
    

    sideBar.appendChild(createAddTask());
    sideBar.appendChild(createBasicCategories());
    sideBar.appendChild(createProjectDisplay());


    return sideBar;
}

export {
    createSidebar
}