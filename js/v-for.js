const app = new Vue({
  el: '#app',
  data: {
    parentMessage: 'parent',
    items: [{ message: 'Foo' }, { message: 'Bar' }],
  },
});

const app2 = new Vue({
  el: '#app2',
  data: {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  methods: {
    even(numArray) {
      return numArray.filter(n => n % 2 === 0);
    },
  },
});

const app3 = new Vue({
  el: '#app3',
});

const app4 = new Vue({
  el: '#app4',
  data: {
    todos: ['todo1', 'todo2', 'todo3'],
  },
});
