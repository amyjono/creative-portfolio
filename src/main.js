import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router/index'
console.log(Vue.version);  

Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App),
})
