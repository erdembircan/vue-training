Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>',
});

const app = new Vue({
  el: '#app',
  data: {
    items: [{ id: 0, text: 'Vegetables' }, { id: 1, text: 'Cheese' }, { id: 2, text: 'Ice cream' }],
  },
});
