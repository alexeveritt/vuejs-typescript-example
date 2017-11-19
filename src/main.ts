// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './pages/app/index.vue'

import router from './routes.ts'

Vue.config.productionTip = false;

new Vue({
    // el: '#app',
    router,
   render: h => h(App)
}).$mount('#app');
