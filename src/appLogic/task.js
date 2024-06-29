class Task {
    constructor(title, description="", priority=4, dueDate="", project="inbox") {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.project = project;
        this.subTasks = [];
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
}


export {
    Task
}