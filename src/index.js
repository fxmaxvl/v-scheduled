import install from './plugin';
import mixin from './mixin';

function autoregister() {
    if (window.Vue) {
        window.Vue.use(install);
    }
}

export {
    mixin,
    install,
    autoregister,
};

autoregister();
