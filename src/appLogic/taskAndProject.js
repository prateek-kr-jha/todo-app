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

    viewSubtaskContent(subTaskIdx) {
        if(!this.subTasks[subTaskIdx]) {
            throw new Error("No such subtask.");
        }

        return this.subTasks[subTaskIdx];
    }

    removeSubtask(indexOfSubTask) {
        if(!this.subTasks[subTaskIdx]) {
            throw new Error("No such subtask.");
        }
        this.subTasks.splice(indexOfSubTask, 1);
    }
    
    toggleCompletionState() {
        this.completed = !this.completed;
    }
}

class SubTask extends Task {
    constructor(title, description="", priority=4, dueDate="", project="", parentTask) {
        if(!parentTask) {
            throw new Error("A subtask can't exist without a parent task.");
        }

        super(title, description="", priority=4, dueDate="", project="");
        this.parentTask = parentTask;
    }
}

// let newSubtask = new SubTask("new sub task", "test for subtask", "", "", "title", "title");
// console.log(newSubtask);

class Project {
    static projectCount = 1;
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.tasks = [];
        this.hash = "p-" + Project.projectCount;
        Project.projectCount++;
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
        if(!this.tasks[taskIdx]) {
            throw new Error("No such task");
        }
        this.tasks.splice(taskIdx, 1);
    }

    showTasks() {
        return this.tasks;
    }

    showTaskContent(taskIdx) {
        if(!this.tasks[taskIdx]) {
            throw new Error("No such task");
        }
        return tasks[taskIdx];
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