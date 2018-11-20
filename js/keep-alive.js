Vue.component('archieve-component', {
  template: '<p>Content of archieve component</p>',
});
Vue.component('posts-component', {
  template: `<div>
    <p>Content of posts component</p><button @click='count++'>{{count}}</button></div>`,
  data() {
    return { count: 0 };
  },
});

const app = new Vue({
  el: '#app',
  data: {
    tabs: ['posts', 'archieve'],
    currentTab: 'posts',
  },
  computed: {
    currentComponent() {
      return `${this.currentTab}-component`;
    },
  },
});
