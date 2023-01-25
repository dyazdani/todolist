"use strict"
// import {ToDoItem} from './todoitem.js';

class ToDoList {
    #title;
    #owner;
    constructor(title, owner) {
        this.#title = title;
        this.#owner = owner;
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
    // addToDoItem() {
    //     this.toDo = new ToDoItem();
    // }
}



module.exports = {ToDoList};