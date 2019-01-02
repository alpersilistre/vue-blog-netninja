new Vue({
  el: '#vue-app',
  data: {
    name: 'Alper',
    job: 'Software Engineer',
    website: 'https://www.alpersilistre.com',
    websiteTag: '<a href="https://www.alpersilistre.com">Alper Silistre Site</a>'
  },
  methods: {
    greet: function (time) {
      return `Good ${time} ${this.name}`;
    }
  }
});