Vue.component('button-counter', {
  template: "<button @click='count++'>{{count}}</button>",
  data() {
    return {
      count: 0,
    };
  },
});

const app = new Vue({
  el: '#app',
});

Vue.component('blog-post', {
  template: "<h3 style='border: 1px solid red; padding: 5px'>{{title}}</h3>",
  props: ['title'],
});

const app2 = new Vue({
  el: '#app2',
  data: {
    posts: [],
  },
  created() {
    const vm = this;

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then((parsed) => {
        vm.posts = parsed.slice(0, 10);
      });
  },
});
