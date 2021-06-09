import Vue from 'vue';
import App from './App.vue';
import router from './router/router'
import VBodyScrollLock from 'v-body-scroll-lock'

Vue.use(VBodyScrollLock)

Vue.config.productionTip = false;

new Vue({
  VBodyScrollLock,
  router,
  render: h => h(App)
}).$mount('#app')
