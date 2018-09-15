Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners() {
      const vm = this;

      const override = {
        input(event) {
          vm.$emit('input', event.target.value);
        },
      };

      return { ...this.$listeners, ...override };
    },
  },
  template: `<label>
    {{label}}
    <input v-bind="$attrs"
      :value="value"
      v-on = "inputListeners"
    >
  </label>`,
});

const app = new Vue({
  el: '#app',
  data: {
    userName: '',
  },
});
