const app = new Vue({
  el: '#app',
  data: {
    ok: true,
    loginTypes: ['username', 'email'],
    currentLoginType: '',
  },
  created() {
    this.currentLoginType = this.loginTypes[0];
  },
  methods: {
    toggleOk() {
      this.ok = !this.ok;
    },
    toggleLoginType() {
      const currentIndex = this.loginTypes.indexOf(this.currentLoginType);
      this.currentLoginType = this.loginTypes[(currentIndex + 1) % this.loginTypes.length];
    },
  },
});
