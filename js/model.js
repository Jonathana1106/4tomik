export default class Model {
    constructor() {
        this.view = null;
        this.todos = [];
    }

    setView(view) {
        this.view = view;
    }

    getToDos() {
        return this.todos;
    }

    addToDos(todo) {
        console.log(todo);
    }
}