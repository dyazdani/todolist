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

    deleteItem(targetItem) {
        this.toDoItems = this.toDoItems.filter(item => item !== targetItem);
    }

    getIncompleteItems() {
        return this.toDoItems.filter(item => !item.isComplete());
    }

    sortByDueDate() {
        const newToDoItems = this.toDoItems.slice();
        newToDoItems.sort(function(a, b) {
            const dateA = a.getDueDate().getTime();
            const dateB = b.getDueDate().getTime();

            if (dateA > dateB) {
                return 1;
            }

            if (dateA < dateB) {
                return -1;
            }

            return 0;
        });
        return newToDoItems;
    }

    sortByTitle() {
        const newToDoItems = this.toDoItems.slice();
        newToDoItems.sort(function(a, b) {
            const titleA = a.getTitle();
            const lowerCaseTitleA = titleA.toLowerCase();
            const titleB = b.getTitle();
            const lowerCaseTitleB = titleB.toLowerCase();

            if (titleA < titleB) {
                return -1;
            }

            if (titleA > titleB) {
                return 1;
            }

            return 0;
        });
        return newToDoItems;
    }
}



module.exports = {ToDoList};