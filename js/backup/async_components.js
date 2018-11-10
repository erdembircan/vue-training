Vue.component('async-example', (res) => {
  setTimeout(() => {
    res({
      template: '<div>Yo, i am async</div>',
    });
  }, 2000);
});

const app = new Vue({
  el: '#app',
});
