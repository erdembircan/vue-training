Vue.filter('capitalize', (value) => {
  if (!value) return;
  value = value.toString();
  return value[0].toUpperCase() + value.slice(1);
});

const app = new Vue({
  el: '#app',
  data: {
    message: ''
  },
});
