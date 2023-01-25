"use strict"
class ToDoItem {
    #title;
    #description;
    #dueDate;
    #complete
    constructor(title, description, dueDate) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = new Date(dueDate);
        this.#complete = false;
    }
    setTitle(title) {
        this.#title = title;
    }
    getTitle() {
      return this.#title; 
    }
    setDescription(description) {
        this.#description = description;
    }
    getDescription() {
      return this.#description; 
    }
    setDueDate(dueDate) {
        this.#dueDate = new Date(dueDate);
    }
    getDueDate() {
      return this.#dueDate; 
    }
    markComplete(boolean) {
        this.#complete = boolean;
    }
    isComplete() {
        return this.#complete;
    }
    // create a new Date object 
    isOverdue() {
        let dueDateInMili = this.#dueDate.getTime();
        return dueDateInMili <= Date.now() 
    }
}

// export {ToDoItem};

module.exports = {ToDoItem};