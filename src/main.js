// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import AppStartScreen from './components/StartScreen.vue';
import AppQuestion from './components/Question.vue';
import AppMessage from './components/Message.vue';
import AppResultScreen from './components/ResultScreen.vue';
import AppFinal from './components/Final.vue';

Vue.config.productionTip = false

Vue.component('AppStartScreen', AppStartScreen);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppMessage', AppMessage);
Vue.component('AppResultScreen', AppResultScreen);
Vue.component('AppFinal', AppFinal);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
