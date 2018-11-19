Vue.component('base-input', {
  inheritAttrs: false,
  props: ['value', 'label'],
  template: `
  <label>
    {{label}}
    <input
      v-bind="$attrs"
      :value="value"
      v-on='inputListeners'
    >
  </label>`,
  computed: {
    inputListeners() {
      const vm = this;

      const nativeListeners = {
        input(e) {
          vm.$emit('input', e.target.value);
        },
      };

      return { ...this.$listeners, ...nativeListeners };
    },
  },
});

const app = new Vue({
  el: '#app',
  data: {
    username: '',
  },
  props: ['base-input'],
  methods: {
    onFocus(e) {
      console.log(`${e.target.tagName.toLowerCase()} is focused`);
    },
  },
});
