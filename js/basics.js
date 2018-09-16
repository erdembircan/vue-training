const myMixin = {
  created() {
    this.hello();
  },
  methods: {
    hello() {
      console.log('Hello 👋');
    },
  },
};

const Component = Vue.extend({
  mixins: [myMixin],
});

const component = new Component();
