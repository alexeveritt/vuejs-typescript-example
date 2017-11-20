import Vue from 'vue';
import {mapActions, mapGetters} from "vuex";

export default Vue.extend({
    data: () => {
        return {msg: 'This is page 1'}
    },
    computed: {
        ...mapGetters('app',['value'])
    },
    methods: {
        incrementValue,
        ...mapActions('app', ['addValue']),
    }
});

function incrementValue() {
    this.addValue(1);
}
