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

Vue.component('text-document', {
  props: {
    title: String,
  },
  template: `<label>
  {{title}}
  <input type="text" @input="$emit('update:title',$event.target.value)">
  </label>`,
});

const app = new Vue({
  el: '#app',
  data: {
    lovingVue: true,
    doc: {
      title: '',
    },
  },
});
