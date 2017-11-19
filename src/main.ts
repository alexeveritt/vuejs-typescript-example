// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './pages/app/index.vue'

import store from './store';
import router from './routes'

Vue.config.productionTip = false;

new Vue({
    store,
    router,
   render: h => h(App)
}).$mount('#app');
