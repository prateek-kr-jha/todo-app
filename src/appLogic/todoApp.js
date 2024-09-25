import { Task, Project } from "./taskAndProject.js";

class Todo {
  constructor() {
    this.projects = {
      inbox: new Project(
        "inbox",
        "Add tasks to inbox on the go and organize later.",
      ),
    };
  }

  addTask(newTask) {
    if (!this.projects.hasOwnProperty(newTask.project)) {
      throw new Error("No such project");
    }
    this.projects[newTask.project].tasks.push(newTask);
  }

  viewInboxTasks() {
    return this.projects[newTask.project].tasks;
  }

  addProject(newProject) {
    if (this.projects.hasOwnProperty(newProject.projectTitle)) {
      throw new Error("Project already present, please change the name.");
    }

    this.projects[newProject.projectTitle] = newProject;
  }

  viewProjects() {
    return this.projects;
  }

  viewProjectContent(projectTitle) {
    if (this.projects.hasOwnProperty(projectTitle)) {
      throw new Error("No such Project.");
    }
    return this.projects[projectTitle];
  }
}

let todo_1 = new Todo();
