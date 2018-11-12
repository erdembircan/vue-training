const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello',
    first: '',
    last: '',
  },
  computed: {
    reversedMessage() {
      return this.message
        .split('')
        .reverse()
        .join('');
    },
    fullName() {
      return `${this.first} ${this.last}`;
    },
  },
});
