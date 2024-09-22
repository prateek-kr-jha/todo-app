import './sidebar.css';
import { createDivWithClass,createImageWithSource } from '../common/commonHelper';
import add_icon from './img/add.svg';
import inbox_icon from './img/inbox.svg';
import search_icon from './img/search.svg';
import today_icon from './img/today.svg';
import inbox_red_icon from './img/inboxRed.svg';
import search_red_icon from './img/searchRed.svg';
import today_red_icon from './img/todayRed.svg';

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
    const projectHeading = createDivWithClass('project-heading-cntnr');
    projectHeading.innerText = "Projects";
    projectDisplay.appendChild(projectHeading);
    return projectDisplay;
}

function createSidebar() {
    const sideBar = createDivWithClass('sidebar');
    

    sideBar.appendChild(createAddTask());
    sideBar.appendChild(createBasicCategories());
    sideBar.appendChild(createProjectDisplay());


    return sideBar;
}
function sidebarEffectHandler() {
    const sidebarDivs = document.querySelectorAll('.basic-categories > div');

    sidebarDivs.forEach(div => {
        div.addEventListener("click", addEffectToSidebarDivs);
        div.addEventListener('mouseover',(e) => {
            const currentDiv = e.currentTarget;
            const imgChild = e.currentTarget.firstChild;
            if(![today_red_icon, search_red_icon, inbox_red_icon].includes(imgChild.src)) {
                currentDiv.style.backgroundColor = "#363636";
            }
        })
        div.addEventListener('mouseout', (e) => {
            const currentDiv = e.currentTarget;
            const imgChild = currentDiv.firstChild;

            if(![today_red_icon, search_red_icon, inbox_red_icon].includes(imgChild.src)) {
                currentDiv.style.backgroundColor = "#262626";
            }
        })
    })
}


function addEffectToSidebarDivs(e) {
    const div1 = e.currentTarget;
    const allSiblings = Array.from(div1.parentNode.children);
    resetAllDivs(allSiblings);


    let children = div1.children;
    div1.style.backgroundColor = "#472525";

    for(let i = 0; i < children.length; i++) {
        console.log(children[i]);
        switch(children[0].src) {
            case search_icon:
                children[0].src = search_red_icon;
                break;
            case today_icon:
                children[0].src = today_red_icon;
                break;
            case inbox_icon:
                children[0].src = inbox_red_icon;
                break;
        }
        if(children[i].nodeName == 'DIV') {
            children[i].style.color = "#de4c4a";
        }
    }
}

function resetAllDivs(allSiblings) {
    allSiblings.forEach(sibling => {
        sibling.style.backgroundColor = "#262626";
        const child = sibling.children;
        switch(child[0].src) {
            case search_red_icon:
                child[0].src = search_icon;
                break;
            case today_red_icon:
                child[0].src = today_icon;
                break;
            case inbox_red_icon:
                child[0].src = inbox_icon;
                break;
        }
        child[1].style.color = "#e8eaed";
    })
}
export {
    createSidebar,
    sidebarEffectHandler
}


