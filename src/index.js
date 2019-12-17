import install from './plugin';
import mixin from './mixin';

function autoregister() {
    if (typeof window && window.Vue) {
        window.Vue.use(install);
    }
}

export {
    mixin,
    install,
    autoregister,
};

autoregister();
