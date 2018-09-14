const components = [
  {
    name: 'Home',
    template: '<div>Home Component</div>',
  },
  {
    name: 'Search',
    template: '<div>Search Component</div>',
  },
  {
    name: 'About',
    template: '<div>About Component</div>',
  },
];

const app = new Vue({
  el: '#app',
  data: {
    components,
    currentComponent: components[0],
  },
});
