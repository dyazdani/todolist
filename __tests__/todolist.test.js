"use strict";
const {ToDoList} = require("./../scripts/todolist");

/* TODO:
    Todo List Class
        • set name and owner in constructor
        • get/set name
        • get/set owner
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
});