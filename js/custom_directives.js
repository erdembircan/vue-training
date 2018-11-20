Vue.directive('focus', {
  inserted(el) {
    el.focus();
  },
});

Vue.directive('color-swatch', (el, binding) => {
  el.style.color = binding.value;
});

const app = new Vue({
  el: '#app',
});
