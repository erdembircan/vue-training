const app = new Vue({
  el: '#app',
  created() {
    this.numbers = Array.from({ length: 30 }, (_, i) => Math.floor(Math.random() * 100));
  },
  methods: {
    even(numbers) {
      return Array.from(new Set(numbers.filter(number => number % 2 === 0)));
    },
  },
});
