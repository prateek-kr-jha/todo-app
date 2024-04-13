import { Task, Project } from "./task.js";
// import {  } from "./todo.js";

let new_todo = new Todo("Cook", "chicken curry", "04-05-2024", 1);
console.log(new_todo);
new_todo.edit(null, "aloo dum", null, 5);
console.log(new_todo);
new_todo.toggleCompletionStatus();
console.log(new_todo);

let new_Project = new Project("weekend", "tasks for weekend");
console.log(new_Project);
new_Project.addTodo(new_todo);
// console.log(new_Project);
let tod_obj = {
    title: 'wash',
    description: 'clothes',
    dueDate: '04-05-2024',
    priority: 5
  }

new_Project.addTodo(tod_obj);
new_Project.showTodo();