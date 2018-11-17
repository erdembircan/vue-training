Vue.component('button-counter', {
  template: `
<div class= 'blog-post'>
  <button @click='count++'>{{count}}</button>
</div>
  `,
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
  template: `
<div style='border: 1px solid red; padding: 5px; margin: 5px'>
  <h3 >{{title}}</h3>
  <button @click="$emit('enlarge-text', .2)">Enlarge</button>
</div>
  `,
  props: ['title'],
});

const app2 = new Vue({
  el: '#app2',
  data: {
    posts: [],
    postFontSize: 1,
  },
  created() {
    const vm = this;

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then((parsed) => {
        vm.posts = parsed.slice(0, 3);
      });
  },
  methods: {
    fontSizeIn(val = 0.1) {
      this.postFontSize += val;
    },
  },
});

Vue.component('search-component', {
  template: `
    <input :value='value'
    @input="$emit('input', $event.target.value)"
    >
  `,
  props: ['value'],
});

const app3 = new Vue({
  el: '#app3',
  data: {
    searchText: '',
  },
});
