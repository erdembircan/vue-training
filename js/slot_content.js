Vue.component('navigation-link', {
  template: `
  <a :href='url' target='_blank'>
    <slot>Link</slot>
  </a>
  `,
  props: ['url'],
});

const app = new Vue({
  el: '#app',
});
