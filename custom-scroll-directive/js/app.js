Vue.directive('scroll', {
    inserted: function(el, binding) {
        let f = function(evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f);
            }
        };

        window.addEventListener('scroll', f);
    }
});


new Vue({
    el: "#app",
    methods: {
        handleScroll: function(evt, el) {
            if (window.scrollY > 50) {
                TweenMax.to(el, 1.5, {
                    y: -10,
                    opacity: 1,
                    ease: Sine.easeOut
                })
            }
            return window.scrollY > 100;
        }
    }
});
