Vue.component('todo-list', {
  props: {
    todos: Array,
  },
  template: `<ul>
    <li v-for="todo in todos" :key="todo.id">
      <slot :todo="todo">
      {{todo.text}}
      </slot>
    </li>
  </ul>`,
});

const app = new Vue({
  el: '#app',
  data: {
    todos: [
      { id: 0, text: 'first', completed: false },
      { id: 1, text: 'second', completed: true },
      { id: 2, text: 'third', completed: false },
    ],
  },
});
