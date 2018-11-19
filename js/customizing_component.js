Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean,
  },
  template: `
  <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)">
  `,
});

const app = new Vue({
  el: '#app',
  data: {
    lovingVue: true,
  },
});
