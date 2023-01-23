"use strict";
const {ToDoItem} = require("./../scripts/todoitem");

/*	TODO: 
    ToDoItem Class Features
    ◦	set name, description & optional due date in constructor
	◦	mark item complete/incomplete
	◦	get/set title
	◦	get/set description
	◦	get/set due date
	◦	check if the item is overdue
	◦	check if the item is complete */

describe("ToDoItem", () => {
    test("constructor existence", () => {
        const toDoItem = new ToDoItem();
        expect(toDoItem).toBeDefined();
        expect(toDoItem).toBeInstanceOf(ToDoItem);
    })
    test("can set & get title", () => {
        const toDoItem = new ToDoItem();
        const title = "a title";
        toDoItem.setTitle(title);
        expect(toDoItem.getTitle()).toBe(title);
    })
    test("constructor can set title", () => {
        const title = "a title";
        const toDoItem = new ToDoItem(title);
        expect(toDoItem.getTitle()).toBe(title);
    })
    test("can set & get description", () => {
        const toDoItem = new ToDoItem();
        const description = "a description";
        toDoItem.setDescription(description);
        expect(toDoItem.getDescription()).toBe(description);
    })
    test("constructor can set description", () => {
        const description = "a description";
        const title = "a title";
        const toDoItem = new ToDoItem(title, description);
        expect(toDoItem.getDescription()).toBe(description);
    })
    test("can set & get dueDate", () => {
        const toDoItem = new ToDoItem();
        const dueDate = "the due date";
        toDoItem.setDueDate(dueDate);
        expect(toDoItem.getDueDate()).toBe(dueDate);
    })
    test("constructor can set dueDate", () => {
        const dueDate = "the due date";
        const description = "a description";
        const title = "a title";
        const toDoItem = new ToDoItem(title, description, dueDate);
        expect(toDoItem.getDueDate()).toBe(dueDate);
    })
    test("mark item complete", () => {
        const toDoItem = new ToDoItem();    
        toDoItem.markComplete();
        expect(toDoItem.complete).toBe(true);
    })
    test("mark item incomplete", () => {
        const toDoItem = new ToDoItem();    
        toDoItem.markIncomplete();
        expect(toDoItem.complete).toBe(false);
    })
});