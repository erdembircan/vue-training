const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!!!',
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('');
    },
  },
});

const app2 = new Vue({
  el: '#app2',
  data: {
    message: 'model message',
  },
});
