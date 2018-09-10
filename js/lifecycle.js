const vm = new Vue({
  el: '#app',
  data: {
    a: 1,
  },
  created() {
    console.log(`%ca is ${this.a}`, 'background:#00ff00');
  },
});
