Vue.component('todo-item', {
  template: '<li>{{title}} <button @click="$emit(\'remove\')">Remove</button></li>',
  props: ['title'],
});

const app = new Vue({
  el: '#app',
  data: {
    todos: [],
    newTodoText: '',
  },
  computed: {
    nextId() {
      return this.todos.length === 0
        ? 0
        : (function findHighest(todos) {
          let highestID = 0;
          todos.map((todo) => {
            highestID = todo.id > highestID ? todo.id : highestID;
          });
          return highestID + 1;
        }(this.todos));
    },
  },
  methods: {
    addNewTodo() {
      this.todos.push({ id: this.nextId, title: this.newTodoText });
      this.resetNewTodo();
    },
    resetNewTodo() {
      this.newTodoText = '';
    },
  },
});
