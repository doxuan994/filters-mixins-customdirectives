Vue.directive('color', {
    bind: function(el, binding, vnode) {
        el.style.color = binding.value;
    }
});



new Vue({
    el: "#app",
    data() {
        return {
            num: 2
        }
    },
    filters: {
        addSuffix(value) {
            if (value == 1) {
                return `${value}st`
            } else if (value == 2) {
                return `${value}nd`
            } else if (value == 3) {
                return `${value}rd`
            } else {
                return `${value}th`
            }
        }
    }
});
