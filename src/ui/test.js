import { Project } from "../appLogic/taskAndProject.js";

let newProject = new Project("project-1", "test");
let newProject2 = new Project("project-2", "test2");


let todoApp = {
    projects: {
        newProject,
        newProject2
    }
}
console.log(todoApp);
