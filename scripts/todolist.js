"use strict"
class ToDoList {
    #title;
    constructor() {

    }
    setTitle(title) {
        this.#title = title;
    }
    getTitle() {
        return this.#title; 
      }
}

module.exports = {ToDoList};