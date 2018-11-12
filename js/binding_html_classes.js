const app = new Vue({
  el: '#app',
  data: {
    isActive: true,
    hasErrors: false,
  },
  computed: {
    classObject() {
      return {
        active: this.isActive,
        'text-danger': this.hasErrors,
      };
    },
  },
});
