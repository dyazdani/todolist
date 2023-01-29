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
    describe("constructor", () => {
    test("constructor existence", () => {
        const toDoList = new ToDoList();
        expect(toDoList).toBeDefined();
        expect(toDoList).toBeInstanceOf(ToDoList);
    });
    test("constructor can set list title, owner", () => {
        const owner = "the owner";
        const listTitle = "the list title";
        const toDoList = new ToDoList(listTitle, owner);
        expect(toDoList.getListTitle()).toBe(listTitle);
        expect(toDoList.getOwner()).toBe(owner);
    });
});

    test("can set & get title", () => {
        const toDoList = new ToDoList();
        const listTitle = "the list title";
        toDoList.setListTitle(listTitle);
        expect(toDoList.getListTitle()).toBe(listTitle);
    });

    test("can set & get owner", () => {
        const toDoList = new ToDoList();
        const owner = "the owner";
        toDoList.setOwner(owner);
        expect(toDoList.getOwner()).toBe(owner);
    });

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
    });

    test.only("delete a todo item", () => {
        const toDoList = new ToDoList();

        const title1 = "Run";
        const description1 = "Go for a run";
        const dueDate1 = new Date("Jan 31 2023");
        const item1 = new ToDoItem(title1, description1, dueDate1);
        toDoList.addToDoItem(item1);

        const title2 = "Walk";
        const description2 = "Go for a walk";
        const dueDate2 = new Date("Jan 30 2023");
        const item2 = new ToDoItem(title2, description2, dueDate2);
        toDoList.addToDoItem(item2);

        expect(toDoList.toDoItems).toStrictEqual([item1, item2]);
        toDoList.deleteItem(item1);
        expect(toDoList.toDoItems).toStrictEqual([item2]);
    });

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

        expect(toDoList.getIncompleteItems()).toStrictEqual([item2]);
    });

    test("sort todo items by due date", () => {
        const toDoList = new ToDoList();

        const title1 = "Workout";
        const description1 = "Workout at gym";
        const dueDate1 = new Date("Feb 11 2023");
        const item1 = new ToDoItem(title1, description1, dueDate1);
        toDoList.addToDoItem(item1);

        const title2 = "Cat";
        const description2 = "Feed cat";
        const dueDate2 = new Date("Jan 31 2023");
        const item2 = new ToDoItem(title2, description2, dueDate2);
        toDoList.addToDoItem(item2);

        const title3 = "Lawn";
        const description3 = "Mow Lawn";
        const dueDate3 = new Date("March 01 2023");
        const item3 = new ToDoItem(title3, description3, dueDate3);
        toDoList.addToDoItem(item3);

        toDoList.sortByDueDate();

        expect(toDoList.toDoItems).toStrictEqual([item2, item1, item3]);
    });

    test("sort todo items by title", () => {
        const toDoList = new ToDoList();

        const title1 = "Soccer";
        const description1 = "Play soccer";
        const dueDate1 = new Date("Feb 14 2023");
        const item1 = new ToDoItem(title1, description1, dueDate1);
        toDoList.addToDoItem(item1);

        const title2 = "Basketball";
        const description2 = "Play basketball";
        const dueDate2 = new Date("May 31 2023");
        const item2 = new ToDoItem(title2, description2, dueDate2);
        toDoList.addToDoItem(item2);

        const title3 = "Archery";
        const description3 = "Do some archery";
        const dueDate3 = new Date("June 01 2023");
        const item3 = new ToDoItem(title3, description3, dueDate3);
        toDoList.addToDoItem(item3);

        toDoList.sortByTitle();

        expect(toDoList.toDoItems).toStrictEqual([item3, item2, item1]);
    });
});