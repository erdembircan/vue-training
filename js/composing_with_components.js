Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>',
});

const app = new Vue({
  el: '#app',
  data: {
    groceryList: [{ text: 'apple' }, { text: 'iceberg' }, { text: 'tomato' }, { text: 'parsley' }],
  },
});
