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
        return this.toDoItems.filter(item => item.isOverdue());
    }

    sortByDueDate() {
        this.toDoItems.sort(function(a, b) {
            const dateA = a.getDueDate();
            const miliDateA = dateA.getTime();
            const dateB = b.getDueDate();
            const miliDateB = dateB.getTime();

            if (miliDateA > miliDateB) {
                return 1;
            }

            if (miliDateA < miliDateB) {
                return -1;
            }

            return 0;
        });
    }

    sortByTitle() {
        this.toDoItems.sort(function(a, b) {
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
    }
}



module.exports = {ToDoList};