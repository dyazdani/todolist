"use strict"
class ToDoItem {
    #title;
    #description;
    #dueDate;
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
        this.complete = true;
    }
}

module.exports = {ToDoItem};