import Vue from 'vue';
import VScheduled from '../../src/index';

import main from './main.vue';

Vue.use(VScheduled);

new Vue({
    el: '#app',
    render(createElement) {
        return createElement(main);
    },
});
