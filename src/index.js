import mixin from './mixin';
const plugin = Vue => Vue.mixin(mixin());

export default plugin;
export { mixin };
