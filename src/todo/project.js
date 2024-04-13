class Project {
    constructor(projectTitle, projectDescription) {
        this.projectTitle = projectTitle;
        this.projectDescription = projectDescription;
        this.taskArray = [];
    }
    
    addTodo(taskObj) {
        let { title, description, dueDate, priority } = taskObj;
        let newTask = new Task(title, description, dueDate, priority);
        this.taskArray.push(newTask);
    }

    deleteTodo(taskIdx) {
        if(this.taskArray[taskIdx]) {
            this.taskArray[taskIdx] = null;
        }
    }

    showTodo() {
        for(let task of this.taskArray) {
            console.log(task);
        }
    }

}

export {
    Project
}