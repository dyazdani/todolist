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
    // test("", () => {
    //     let result = functionNameHere();
    //     expect(result).toBe();
    // })
    // test("", () => {
    //     let result = functionNameHere();
    //     expect(result).toBe();
    // })
    // test("", () => {
    //     let result = functionNameHere();
    //     expect(result).toBe();
    // })
})