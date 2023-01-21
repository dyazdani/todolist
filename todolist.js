/* Basic Requirements:

Todo list class
√ set name and owner in constructor
√ get/set name
√ get/set owner
- add Todo item (use the new keyword in a function. what would the name of the instance be?)
- delete a Todo item (delete keyword? )
- get list of incomplete todo items ()

Todo item class
√ set name, description & optional due date in constructor
- mark item complete/incomplete
√ get/set title
√ get/set description
√ get/set due date
- check if the item is overdue
- check if the item is complete */

class ToDoList{
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
    }
    get getName() {
        return this.name;
    }
    set setName(newName) {
        return this.name = newName;
    }
    get getowner() {
        return this.owner;
    }
    set setName(newOwner) {
        return this.owner = newOwner;
    }

}

class ToDoItem {
    //Notes to self: how to make an argument optional? Is a long string in description argument ok?
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
    get getTitle() {
        return this.title;
    }
    set setTitle(newTitle) {
        return this.title = newTitle;
    }
    get getDescription() {
        return this.description;
    }
    set setDescription(newDescription) {
        return this.description = newDescription;
    }
    get getDueDate() {
        return this.dueDate;
    }
    set setDueDate(newDueDate) {
        return this.dueDate = newDueDate;
    }
}