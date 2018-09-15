Vue.component('base-checkbox', {
  model: {
    event: 'change',
    prop: 'checked',
  },
  props: {
    checked: Boolean,
  },
  template:
    '<input type="checkbox" :checked = "checked" @change="$emit(\'change\', $event.target.checked)">',
});

const app = new Vue({
  el: '#app',
  data: {
    lovingVue: true,
  },
});
