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
    // addToDoItem(title, description, dueDate) {
    //     this.title = new ToDoItem(title, description, dueDate);
    // }
    // deleteItem(title) {
    //     if (this.title instanceof ToDoItem) { 
    //     delete this.title;
    //     }
    // }
    // getIncompleteItems() {
    //     let incompleteArray = [];
    //     pseudocode from here down:
    //     1. loop through ToDoList properties for those that have the #complete property.
    //     2. If the value is false, push to incompleteArray.
    //     3. return incompleteArray.

    // }
}



module.exports = {ToDoList};