Vue.component('anchored-heading', {
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  render(h) {
    return h(`h${this.level}`, this.$slots.default);
  },
});

const app = new Vue({
  el: '#app',
});
