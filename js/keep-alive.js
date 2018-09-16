const tabs = [
  {
    name: 'Posts',
    data() {
      return {
        posts: [],
        currentPost: {},
      };
    },
    mounted() {
      return fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json().then((data) => {
        this.posts = data.slice(0, 3);
      }));
    },
    template: `<div style='display:grid; grid-template-columns: auto 1fr; grid-gap: 10px'>
      <div style='border-right: 1px solid grey; padding: 10px'>
          <div v-for='post in posts' :key='post.id'>
<a :style="{cursor: 'hand', fontWeight: currentPost.id === post.id? 'bold': 'normal'}" @click='currentPost = post'  >
           {{post.title.split(' ').slice(0,2).join(' ')}}
</a>
          </div>
      </div>
    <div>{{currentPost.body?currentPost.body : 'Click a category from the options' }}</div>    
    </div>`,
  },
  {
    name: 'Archive',
    props: ['test'],
    template: '<div>Archieve Component</div>',
  },
];

const app = new Vue({
  el: '#app',
  data: {
    tabs,
    currentComponent: tabs[0],
  },
});
