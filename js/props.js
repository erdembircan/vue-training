Vue.component('base-input', {
  inheritAttrs: false,
  props: ['value', 'label'],
  template: `
  <label>
    {{label}}
    <input
      v-bind="$attrs"
      :value="value"
      @input = "$emit('input', $event.target.value)"
    >
  </label>`,
});

const app = new Vue({
  el: '#app',
  data: {
    username: '',
  },
  props: ['base-input'],
  methods: {
    onFocus(e) {
      console.log(`${e.tagName} is focused`);
    },
  },
});
