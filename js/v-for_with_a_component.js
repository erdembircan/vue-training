Vue.component('todo-item', {
  template: `<li>
  {{title}}
  <button @click="$emit('remove')">Remove</button>
  </li>`,
  props: ['title'],
});

const app = new Vue({
  el: '#app',
  data: {
    newTodoText: '',
    todos: [{ id: 0, title: 'do the dishes' }, { id: 1, title: 'buy groceries' }],
    nextTodoId: 2,
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId,
        title: this.newTodoText,
      });
      this.nextTodoId++;
      this.newTodoText = '';
    },
  },
});
