const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!!!',
  },
});

const app2 = new Vue({
  el: '#app2',
  data: {
    loadedDate: `you loaded this component on ${new Date().toLocaleString()}`,
  },
});
