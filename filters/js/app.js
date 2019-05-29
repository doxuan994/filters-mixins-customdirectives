new Vue({
    el: "#app",
    data() {
        return {
            customer1total: 35.43
        }
    },
    filters: {
        tip15(value) {
            return (value*0.15).toFixed(2);
        },
        tip20(value) {
            return (value*0.2).toFixed(2);
        },
        tip25(value) {
            return (value*0.25).toFixed(2);
        }
    }
});
