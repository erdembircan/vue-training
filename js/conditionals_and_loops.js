const app = new Vue({
  el: '#app',
  data: {
    seen: false,
  },
});

const app2 = new Vue({
  el: '#app2',
  data: {
    todos: [
      { text: 'Learn Javascript' },
      { text: 'Learn Vue' },
      { text: 'Build something amazing' },
    ],
  },
});
