"use strict";
const {ToDoList} = require("../todolist");
// const {ToDoItem} = require("../todoitem");

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
        const title = "the title";
        toDoList.setTitle(title);
        expect(toDoList.getTitle()).toBe(title);
    })
    test("can set & get owner", () => {
        const toDoList = new ToDoList();
        const owner = "the owner";
        toDoList.setOwner(owner);
        expect(toDoList.getOwner()).toBe(owner);
    })
    test("constructor can set title, owner", () => {
        const owner = "the owner";
        const title = "the title";
        const toDoList = new ToDoList(title, owner);
        expect(toDoList.getTitle()).toBe(title);
        expect(toDoList.getOwner()).toBe(owner);
    })
    // test("add todo item to todo list", () => {
    //     const toDoList = new ToDoList();
    //     const title = "Shower";
    //     const description = "Take a shower";
    //     const dueDate = "Jan 24 2023";
    //     toDoList.addToDoItem(title, description, dueDate);
    //     expect(toDoList.Shower).toBeInstanceOf(ToDoItem);
    //     expect(toDoList.addToDoItem(title, description, dueDate)).toStrictEqual(toDoList.Shower);
    // })
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
    // test("get list of incomplete todo items", () => {
    //     const toDoList = new ToDoList();
    //     const title = "Paper";
    //     const description = "Finish paper";
    //     const dueDate = "Feb 01 2023";
    //     const title2 = "Dog";
    //     const description2 = "Feed Dog";
    //     const dueDate2 = "Jan 26 2023";
    //     const title3 = "Gutters";
    //     const description3 = "Clean gutters";
    //     const dueDate3 = "March 01 2023";
    //     toDoList.addToDoItem(title, description, dueDate);
    //     toDoList.addToDoItem(title2, description2, dueDate2);
    //     toDoList.addToDoItem(title3, description3, dueDate3);
        
    //     toDoList.Dog.markComplete(true);

    //     let incompleteList = [];
    //     incompleteList.push(toDoList.Paper);
    //     incompleteList.push(toDoList.Gutters);

    //     expect(toDoList.getIncompleteItems()).toStrictEqual(incompleteList);
    // })
});