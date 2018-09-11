const app = new Vue({
  el: '#app',
  data: {
    isActive: true,
    error: { type: 'fatal' },
  },
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal',
      };
    },
  },
});

const dump = document.getElementById('test_class');

dump.parentNode.textContent = dump.outerHTML;
