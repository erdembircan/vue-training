const app = new Vue({
  el: '#app',
  data: {
    counter: 0,
  },
  methods: {
    greet() {
      const time = new Date().getHours();
      const greetings = ['morning', 'evening', 'night'];
      const currentPeriod = time > 18 ? greetings[2] : time > 6 ? greetings[0] : greetings[1];

      alert(`Hello, Good ${currentPeriod}`);
    },
    say(message) {
      alert(message);
    },
    warn(message, event) {
      alert(`${message}_target: ${event.target}`);
    },
    changeColor(e) {
      const colors = ['red', 'yellow', 'green', 'pink'];
      e.target.style.background = colors[Math.floor(Math.random() * colors.length)];
    },
  },
});
