const data = { a: 1 };

const app = new Vue({
  el: '#app',
  data,
  created() {
    console.log('%c created', 'color: red');
  },
});

console.log(`data variable is equal to vue data: ${app.$data === data}`);
console.log(
  `document element is equal to vue element: ${app.$el === document.getElementById('app')}`,
);

app.$watch('a', (n, o) => {
  console.log(`new value: ${n}\n` + `old value: ${o}`);
});
