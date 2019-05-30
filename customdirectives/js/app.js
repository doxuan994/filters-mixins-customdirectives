Vue.directive('tack', {
    bind: function(el, binding, vnode) {
        el.style.position = 'fixed';

        const s = (binding.arg == 'left' ? 'left' : 'top');

        el.style[s] = binding.value + 'px';
    }
});

new Vue({
    el: "#app"
});
