"use strict"
class ToDoItem {
    #title;
    #description;
    #dueDate;
    #complete
    constructor(title, description, dueDate) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
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
        this.#dueDate = dueDate;
    }
    getDueDate() {
      return this.#dueDate; 
    }
    markComplete() {
        this.#complete = true;
    }
    markIncomplete() {
        this.#complete = false;
    }
    isComplete() {
        return this.#complete;
    }
    // create a new Date object 
    isOverdue() {
        let dueDateObject = new Date(this.#dueDate);
        let dueDateInMili = dueDateObject.getTime();
        if (dueDateInMili <= Date.now()) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = {ToDoItem};