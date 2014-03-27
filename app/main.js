var Vue = require('vue');

var app = new Vue({
  el: '#app',
  components: {
    a: require('./components/component-a/index'),
    b: require('./components/component-b/index')
  },
  data: {
    title: 'Hello Node Webkit, Browserify and Vue.js!'
  }
})