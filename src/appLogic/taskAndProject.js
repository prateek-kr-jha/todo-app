class Task {
    constructor(title, description="", priority=4, dueDate="", project="inbox") {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.project = project;
        this.subTasks = [];
        this.completed = false;
    }

    changeTitle(newTitle) {
        this.title = newTitle;
    }

    changeDescription(newDescription) {
        this.description = newDescription;
    }

    changePriority(newPriority) {
        this.priority = newPriority;
    }

    changeDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    changeProject(newProject) {
        this.project = newProject;
    }

    addSubtask(subTask) {
        this.subTasks.push(subTask);
    }

    removeSubtask(indexOfSubTask) {
        this.subTasks.splice(indexOfSubTask, 1);
    }
    
    toggleCompletionState() {
        this.completed = !this.completed;
    }
}

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.tasks = [];
    }
    
    addTask(newTask) {
        this.tasks.push(newTask);
    }

    changeTitle(newTitle) {
        this.title = newTitle;
    }

    changeDescription(newDescription) {
        this.description = newDescription;
    }

    deleteTask(taskIdx) {
        if(!this.taskArray[taskIdx]) {
            throw new Error("No such task");
        }
        this.tasks.splice(taskIdx, 1);
    }

    showTasks() {
        return this.tasks;
    }

    changeProjectOfTask(taskIdx, newProject) {
        if(!this.tasks[taskIdx]) {
            throw new Error("No such task");
        }

        let taskToMove = this.tasks[taskIdx];
        this.tasks.splice(taskIdx, 1);
        newProject.tasks.addTask(taskToMove);
    }

}

export {
    Task, 
    Project
}