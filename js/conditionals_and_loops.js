const app = new Vue({
  el: '#app',
  data: {
    seen: true,
  },
});

setTimeout(() => {
  app.seen = false;
}, 2000);
