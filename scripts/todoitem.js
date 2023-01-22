"use strict"
class ToDoItem {
    #title;
    #description;
    constructor(title, description) {
        this.#title = title;
        this.#description = description;
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
}

module.exports = {ToDoItem};