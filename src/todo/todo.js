class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    edit(title, description, dueDate, priority) {
        if(title) {
            this.title = title;
        }

        if(description) {
            this.description = description;
        }

        if(dueDate) {
            this.dueDate = dueDate;
        }

        if(priority) {
            this.priority = priority;
        }
    }

    toggleCompletionStatus(){
        this.completed = !this.completed;
    }


}


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

    deleteTodo() {

    }

    showTodo() {
        for(let task of this.taskArray) {
            console.log(task);
        }
    }

}

export {
    Task,
    Project,
}