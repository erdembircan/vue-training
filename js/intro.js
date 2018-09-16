Vue.directive('focus', {
  inserted(e) {
    e.focus();
  },
});

Vue.directive('demo', {
  bind(e, binding, node) {
    const s = JSON.stringify;

    const temp = [];

    Object.keys(binding).map((key) => {
      if (binding.hasOwnProperty(key)) {
        const tempString = `${key}: ${s(binding[key])}`;
        temp.push(tempString);
      }
    });

    e.innerHTML = temp.join('<br>');
  },
});

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello',
  },
});
