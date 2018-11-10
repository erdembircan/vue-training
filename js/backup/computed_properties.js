const vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello from Vuejs',
  },
  computed: {
    reversedMessage() {
      return this.message
        .split('')
        .reverse()
        .join('');
    },
  },
});

const vm2 = new Vue({
  el: '#app2',
  data: {
    first: '',
    last: '',
  },
  computed: {
    full() {
      return `${this.first} ${this.last}`;
    },
  },
});
