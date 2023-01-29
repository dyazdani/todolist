"use strict"
const {ToDoItem} = require('./todoitem.js');

class ToDoList {
    #listTitle;
    #owner;
    constructor(listTitle, owner) {
        this.#listTitle = listTitle;
        this.#owner = owner;
        this.toDoItems = [];
    }
    setListTitle(listTitle) {
        this.#listTitle = listTitle;
    }
    getListTitle() {
        return this.#listTitle; 
      }
    setOwner(owner) {
        this.#owner = owner;
    }
    getOwner() {
        return this.#owner; 
      }
    addToDoItem(item) {
        this.toDoItems.push(item);
    }
    // deleteItem(title) {
    //     if (this.title instanceof ToDoItem) { 
    //     delete this.title;
    //     }
    // }
    getIncompleteItems() {
        return this.toDoItems.filter(item => item.isOverdue());
    }
}



module.exports = {ToDoList};