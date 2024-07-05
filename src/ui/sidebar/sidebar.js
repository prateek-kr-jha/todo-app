import './sidebar.css';
import { createDivWithClass,createImageWithSource } from '../common/commonHelper';
import add_icon from './img/add.svg';
import inbox_icon from './img/inbox.svg';
import search_icon from './img/search.svg';
import today_icon from './img/today.svg';

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

// <div class="basic-categories">
// <div class="search-cntnr">
//     <img src="./search.svg" alt="" class="search-icon">
//     <div class="search-text">Search</div>
// </div>
// <div class="inbox-cntnr">
//     <img src="./inbox.svg" class="inbox-icon">
//     <div class="inbox-text">Inbox</div>
// </div>
// <div class="today-cntnr">
//     <img src="./today.svg" alt="" class="today-icon">
//     <div class="today-text">Today</div>
// </div>
// </div>

function createBasicCategories() {
    const basicCategories = createDivWithClass('basic-categories');

    const searchContainer = createDivWithClass('search-cntnr');
    const searchImg = createImageWithSource(search_icon, 'search-icon');
    const searchText = createDivWithClass('search-text');
    searchText.innerText = "Search";
    searchContainer.appendChild(searchImg);
    searchContainer.appendChild(searchText);
    
    const inboxContainer = createDivWithClass('inbox-cntnr');
    const inboxImg = createImageWithSource(inbox_icon, 'inbox-icon');
    const inboxText = createDivWithClass('inbox-text');
    inboxText.innerText = "Inbox";
    inboxContainer.appendChild(inboxImg);
    inboxContainer.appendChild(inboxText);
    
    
    const todayContainer = createDivWithClass('today-cntnr');
    const todayImg = createImageWithSource(today_icon, 'today-icon');
    const todayText = createDivWithClass('today-text');
    todayText.innerText = "Today";
    todayContainer.appendChild(todayImg);
    todayContainer.appendChild(todayText);
    basicCategories.appendChild(searchContainer);
    basicCategories.appendChild(inboxContainer);
    basicCategories.appendChild(todayContainer);


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