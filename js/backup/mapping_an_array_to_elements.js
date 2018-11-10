const app = new Vue({
  el: '#app',
  data: {
    parentMessage: 'parent',
    items: [{ message: 'first' }, { message: 'second' }],
    object: {
      message: 'test',
      date: new Date().toLocaleString(),
      weather: 'sunny',
    },
  },
});
