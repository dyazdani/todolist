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
    //     expect(toDoList.addToDoItem()).toBeInstanceOf(ToDoItem);
    //     expect(toDoList.toDo).toStrictEqual(toDoList.addToDoItem());
    // })
});