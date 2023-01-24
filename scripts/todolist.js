"use strict"
class ToDoList {
    #title;
    #owner;
    constructor() {

    }
    setTitle(title) {
        this.#title = title;
    }
    getTitle() {
        return this.#title; 
      }
    setOwner(owner) {
        this.#owner = owner;
    }
    getOwner() {
        return this.#owner; 
      }
}

module.exports = {ToDoList};