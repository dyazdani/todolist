"use strict";
const {ToDoItem} = require("../todoitem");

/*	TODO: 
    ToDoItem Class Features
    √	set name, description & optional due date in constructor
	√	mark item complete/incomplete
	√	get/set title
	√	get/set description
	√	get/set due date
	√	check if the item is overdue
	√	check if the item is complete */

describe("ToDoItem", () => {
    describe('constructor', () => {
        test("constructor existence", () => {
            const toDoItem = new ToDoItem();
            expect(toDoItem).toBeDefined();
            expect(toDoItem).toBeInstanceOf(ToDoItem);
        });

        test("constructor can set title, description, dueDate", () => {
            const dueDate = new Date("June 15 1990");
            const description = "a description";
            const title = "a title";
            const toDoItem = new ToDoItem(title, description, dueDate);
            expect(toDoItem.getTitle()).toBe(title);
            expect(toDoItem.getDescription()).toBe(description);
            expect(toDoItem.getDueDate()).toStrictEqual(new Date("June 15 1990"));
        });
    });

    test("can set & get title", () => {
        const toDoItem = new ToDoItem();
        const title = "a title";
        toDoItem.setTitle(title);
        expect(toDoItem.getTitle()).toBe(title);
    });

    test("can set & get description", () => {
        const toDoItem = new ToDoItem();
        const description = "a description";
        toDoItem.setDescription(description);
        expect(toDoItem.getDescription()).toBe(description);
    });

    test("can set & get dueDate", () => {
        const toDoItem = new ToDoItem();
        const dueDate = new Date("Dec 03 1987");
        toDoItem.setDueDate(dueDate);
        expect(toDoItem.getDueDate()).toStrictEqual(new Date("Dec 03 1987"));
    });

    test("mark item complete and incomplete", () => {
        const toDoItem = new ToDoItem();    
        toDoItem.markComplete(true);
        expect(toDoItem.isComplete()).toBe(true);
        toDoItem.markComplete(false);
        expect(toDoItem.isComplete()).toBe(false);
    });

    test("check if item is complete", () => {
        const toDoItem = new ToDoItem();    
        toDoItem.markComplete(true);
        expect(toDoItem.isComplete()).toBe(true);
        toDoItem.markComplete(false);
        expect(toDoItem.isComplete()).toBe(false);
    });

    test("check if item is overdue when it is", () => {
        const dueDate = new Date("July 11 2011");
        const description = "a description";
        const title = "a title";
        const toDoItem = new ToDoItem(title, description, dueDate);    
        expect(toDoItem.isOverdue()).toBe(true);
    });

    test("check if item is overdue when it is not", () => {
        const dueDate = new Date("July 11 2031");
        const description = "a description";
        const title = "a title";
        const toDoItem = new ToDoItem(title, description, dueDate);    
        expect(toDoItem.isOverdue()).toBe(false);
    });
});