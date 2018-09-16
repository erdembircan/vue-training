const app = new Vue({
  el: '#app',
  data: {
    date: null,
  },
  mounted() {
    this.setUpDatePicker(this.$refs.dateInput);
  },
  methods: {
    setUpDatePicker(element) {
      const picker = new Pikaday({
        field: element,
        format: 'DD-MM-YYYY',
      });

      this.$once('hook:beforeDestroy', () => {
        picker.destroy();
      });
    },
  },
});
