Vue.component('navigation-link', {
  props: {
    url: String,
  },
  template: `<a :href="url" >
    <slot>Link</slot>
  </a>`,
});

const app = new Vue({
  el: '#app',
});
