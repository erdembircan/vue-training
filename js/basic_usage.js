const app = new Vue({
  el: '#app',
  data: {
    message: '',
  },
});

const app2 = new Vue({
  el: '#app2',
  data: {
    checkedNames: [],
  },
});

const app3 = new Vue({
  el: '#app3',
  data: {
    selected: 'A',
    options: [
      { value: 'A', text: 'one' },
      { value: 'B', text: 'two' },
      { value: 'C', text: 'three' },
    ],
  },
});
