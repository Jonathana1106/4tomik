export default class Model {
    constructor() {
        this.view = null;
        this.todos = [];
        this.currentID = 1;
    }

    setView(view) {
        this.view = view;
    }

    getToDos() {
        return this.todos;
    }

    addToDo(title, description) {
        /**
         * Si una propiedad se llama igual que su valor 
         * pues adios
         */
        const todo = {
            id: this.currentID++,
            title,
            description,
            completed: false
        }
        
        this.todos.push(todo);
        console.log(this.todos);

        /**
         * Vamos a devolver un clon ddel objeto, para
         * eso lo vamos a expandir
         */
        return {...todo};
    }

    removeToDo(id) {
        const index = this.findToDo(id);
        this.todos.splice(index, 1);
    }

    findToDo(id) {
        return this.todos.findIndex((todo) => todo.id === id);
    }

    toggleCompleted(id) {
        // console.log(id);
        const index = this.findToDo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        console.log(this.todos);
    }
}