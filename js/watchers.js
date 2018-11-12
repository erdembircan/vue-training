const app = new Vue({
  el: '#app',
  data: {
    question: '',
    answer: "I can't give you an answer if you don't ask a question",
  },
  watch: {
    question() {
      this.answer = 'waiting for you to stop typing...';
      this.getDebouncedAnswer();
    },
  },
  created() {
    this.getDebouncedAnswer = helper.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer() {
      if (this.question.indexOf('?') === -1) {
        this.answer = "questions usually ends with a '?'";
        return;
      }
      this.answer = 'thinking 🤔 ...';
      axios
        .get('https://yesno.wtf/api')
        .then((resp) => {
          this.answer = resp.data.answer;
        })
        .catch((e) => {
          this.answer = 'Error! Can not reach target api';
        });
    },
  },
});
