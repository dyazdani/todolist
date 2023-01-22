"use strict"
class ToDoItem {
    #title;
    constructor(title) {
        this.#title = title;
    }
    setTitle(title) {
        this.#title = title;
    }
    getTitle() {
      return this.#title; 
    }
}

module.exports = {ToDoItem};