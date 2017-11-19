import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from './pages/home/index.vue';
import Page2Component from './pages/page2/index.vue';

Vue.use(VueRouter);

const routes = [

    {
        name: 'page2',
        path: '/page2',
        component: Page2Component
    }, {
        name: 'home',
        path: '/',
        component: HomeComponent
    }
];


export default new VueRouter({
    routes
});

