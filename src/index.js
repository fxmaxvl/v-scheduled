import mixin from './mixin';

const install = Vue => Vue.mixin(mixin());

export {
    install,
    mixin,
};
