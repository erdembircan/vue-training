const watchExample = new Vue({
  el: '#app',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask me a question',
  },
  watch: {
    question(n, o) {
      this.answer = 'Waiting for you to stop typing...';
      this.debouncedGetAnswer();
    },
  },
  created() {
    this.debouncedGetAnswer = helper.debounce(this.getAnswer, 1500);
  },
  methods: {
    getAnswer() {
      if (this.question.indexOf('?') === -1 || !this.question.endsWith('?')) {
        this.answer = 'Questions usually end with a ?';
        return;
      }
      this.answer = 'Thinking...';
      axios
        .get('https://yesno.wtf/api')
        .then((res) => {
          this.answer = res.data.answer;
        })
        .catch((error) => {
          this.answer = 'An error occured';
        });
    },
  },
});
