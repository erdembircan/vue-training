Vue.component('async-component', (res, rej) => {
  setTimeout(() => {
    res({
      template: '<p>Loaded</p>',
    });
  }, 2000);
});

const app = new Vue({
  el: '#app',
});
