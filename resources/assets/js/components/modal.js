Barba.Dispatcher.on("transitionCompleted", function() {
    if (document.getElementById("modal")) {
        const modal = new Vue({
            el: '#modal',
            store,
            data: function () {
                return {}
            },
            computed: {
                modalVisible: {
                    get: function () {
                        return this.$store.getters.modalVisible
                    },
                    set: function (newValue) {
                        this.$store.dispatch('toggleModalVisibility', newValue)
                    }
                }
            },
            mounted: function () {
            },
            methods: {},
            created: function () {
            },
            destroyed: function () {
            }
        });
    }
});