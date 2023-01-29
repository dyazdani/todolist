"use strict";
const {ToDoList} = require("../todolist.js");
const {ToDoItem} = require('../todoitem.js');

/* TODO:
    Todo List Class
        √ set title and owner in constructor
        √ get/set title
        √ get/set owner
        • add Todo item
        • delete a Todo item
        • get list of incomplete todo items */

describe("ToDoList", () => {
    test("constructor existence", () => {
        const toDoList = new ToDoList();
        expect(toDoList).toBeDefined();
        expect(toDoList).toBeInstanceOf(ToDoList);
    })
    test("can set & get title", () => {
        const toDoList = new ToDoList();
        const listTitle = "the list title";
        toDoList.setListTitle(listTitle);
        expect(toDoList.getListTitle()).toBe(listTitle);
    })
    test("can set & get owner", () => {
        const toDoList = new ToDoList();
        const owner = "the owner";
        toDoList.setOwner(owner);
        expect(toDoList.getOwner()).toBe(owner);
    })
    test("constructor can set list title, owner", () => {
        const owner = "the owner";
        const listTitle = "the list title";
        const toDoList = new ToDoList(listTitle, owner);
        expect(toDoList.getListTitle()).toBe(listTitle);
        expect(toDoList.getOwner()).toBe(owner);
    })
    test("add todo item to todo list", () => {
        const toDoList = new ToDoList();
        const title = "Shower";
        const description = "Take a shower";
        const dueDate = new Date("Jan 24 2023");
        const item = new ToDoItem(title, description, dueDate);
        toDoList.addToDoItem(item);
        expect(toDoList.toDoItems[0]).toBeInstanceOf(ToDoItem);
        expect(toDoList.toDoItems[0].getTitle()).toBe(title);
        expect(toDoList.toDoItems[0].getDescription()).toBe(description);
        expect(toDoList.toDoItems[0].getDueDate()).toStrictEqual(new Date("Jan 24 2023"));
    })
    // test("delete a todo item", () => {
    //     const toDoList = new ToDoList();
    //     const title = "Run";
    //     const description = "Go for a run";
    //     const dueDate = "Jan 31 2023";
    //     toDoList.addToDoItem(title, description, dueDate);
    //     expect(toDoList.addToDoItem(title, description, dueDate)).toStrictEqual(toDoList.Run);
    //     toDoList.deleteItem(Run);
    //     expect(toDoList.Run).toBe(undefined);
    // })
    test("get list of incomplete todo items", () => {
        const toDoList = new ToDoList();

        const title1 = "Paper";
        const description1 = "Finish paper";
        const dueDate1 = new Date("Feb 01 2023");
        const item1 = new ToDoItem(title1, description1, dueDate1);
        toDoList.addToDoItem(item1);

        const title2 = "Dog";
        const description2 = "Feed Dog";
        const dueDate2 = new Date("Jan 26 2023");
        const item2 = new ToDoItem(title2, description2, dueDate2);
        item2.markComplete(true);
        toDoList.addToDoItem(item2);

        const title3 = "Gutters";
        const description3 = "Clean gutters";
        const dueDate3 = new Date("March 01 2023");
        const item3 = new ToDoItem(title3, description3, dueDate3);
        toDoList.addToDoItem(item3);

        expect(toDoList.getIncompleteItems()).toStrictEqual[(item2)];
    })
});