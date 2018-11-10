Vue.component('button-counter', {
  data() {
    return { count: 0 };
  },
  template: "<button @click='count++'>You clicked me {{count}} times</button>",
});

Vue.component('blog-post', {
  props: ['title'],
  template: `<div>
    <h3>{{title}}</h3>
    <button @click="$emit('enlarge-text', 0.1)">Enlarge</button>
  </div>`,
});

Vue.component('custom-input', {
  props: ['value'],
  template: '<input :value="value" @input="$emit(\'input\', $event.target.value)">',
});

const app = new Vue({
  el: '#app',
  data: {
    posts: [],
    postFontSize: 1,
    searchText: '',
  },
  created() {
    const vm = this;

    fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json().then((data) => {
      vm.posts = data.splice(0, 4);
    }));
  },
});
