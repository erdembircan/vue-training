Vue.component('todo-list', {
  props: ['todos'],
  template: `
    <ul>
      <li v-for="todo in todos" :key='todo.key'>
        <slot :todo="todo">
          {{todo.text}}
        </slot>
      </li>
    </ul>
  `,
});

const app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: 'foo', id: 0, completed: true },
      { text: 'bar', id: 1, completed: false },
      { text: 'zoo', id: 2, completed: true },
    ],
  },
});
