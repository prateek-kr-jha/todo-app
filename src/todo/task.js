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


export {
    Task
}