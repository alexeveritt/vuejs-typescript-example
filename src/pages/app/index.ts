import Vue from 'vue';
import PageHeader from '../../components/header/index.vue';
import PageFooter from '../../components/footer/index.vue';

export default Vue.extend({
    name: 'app',
    data: () => {
        return {msg: 'This is page 1'}
    },
    components: {
        PageHeader,
        PageFooter
    }
});

