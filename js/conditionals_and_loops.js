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
