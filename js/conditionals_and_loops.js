const app = new Vue({
  el: '#app',
  data: {
    seen: true,
  },
});

const cb = document.getElementById('visibility_toggle');

cb.addEventListener('change', (e) => {
  app.seen = e.target.checked;
});

const app2 = new Vue({
  el: '#app2',
  data: {
    todos: [
      { text: 'Learn Javascript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' },
    ],
  },
});
