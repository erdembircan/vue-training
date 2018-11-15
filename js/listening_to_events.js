const app = new Vue({
  el: '#app',
  data: {
    counter: 0,
  },
});

Vue.config.keyCodes.f1 = 112;

const app2 = new Vue({
  el: '#app2',
  data: {
    show: true,
  },
});
