Vue.directive('tack', {
    bind: function(el, binding, vnode) {
        el.style.position = 'fixed';
        el.style.top = binding.value + 'px';
    }
});

new Vue({
    el: "#app"
});
