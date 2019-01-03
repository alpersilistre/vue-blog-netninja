new Vue({
  el: '#vue-app',
  data: {
    name: 'Alper',
    job: 'Software Engineer',
    website: 'https://www.alpersilistre.com',
    websiteTag: '<a href="https://www.alpersilistre.com">Alper Silistre Site</a>',
    age: 26,
    x: 0,
    y: 0
  },
  methods: {
    greet: function (time) {
      return `Good ${time} ${this.name}`;
    },
    subtract: function () {
      this.age--;
    },
    addTen: function () {
      this.age += 10;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});