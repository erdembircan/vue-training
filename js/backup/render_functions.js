Vue.component('anchored-heading', {
  render(createElement) {
    return createElement(`h${this.level}`, this.$slots.default);
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});

const app = new Vue({
  el: '#app',
});
