Vue.filter('capitalize', (val) => {
  if (!val || val.length === 0) return;

  return val[0].toUpperCase() + val.slice(1);
});

const app = new Vue({
  el: '#app',
  data: {
    message: '',
  },
});
