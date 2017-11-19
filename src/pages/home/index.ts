import Vue from 'vue';
// import Header from '../header/index.vue';



// export default class Page2Component extends Vue {
//     data:  ()=>{
//             msg: 'This is a main page'
//         }
//
// }

export default Vue.extend({
    data: ()=>{
        return {  msg: 'This is page 1'}
    }
});

// let HomeComponent = Vue.component('home', {
//     data() {
//         return {
//             msg: 'This is a main page'
//         }
//     },
//     components: {
//         // Header
//     }
// });
//
// export {HomeComponent};