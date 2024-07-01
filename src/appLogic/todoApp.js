import { Task, Project } from "./taskAndProject.js";

class Todo {
    constructor() {
        this.projects = {
            inbox: new Project("inbox", "Add tasks to inbox on the go and organize later.")
        };
    }

    addTask(newTask) {
        if(!this.projects.hasOwnProperty(newTask.project)) {
            throw new Error("No such project");
        }
        this.projects[newTask.project].tasks.push(newTask);
    }
}

let todo_1 = new Todo();
