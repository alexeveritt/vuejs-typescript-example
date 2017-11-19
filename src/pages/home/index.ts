import Vue from 'vue';
import {mapActions} from "vuex";

export default Vue.extend({
    data: () => {
        return {msg: 'This is page 1'}
    },
    computed: {
        value(): number {
            return this.$store.getters.value;
        }
    },
   ...mapActions('app',['addValue']),
    methods: {
        incrementValue
    }
});

function incrementValue() {
    this.addValue(1);
    // this.$store.dispatch('addValue', 1);
}
