Barba.Dispatcher.on("transitionCompleted", function () {
    if (document.getElementById("section-form")) {
        const sectionForm = new Vue({
            el: '#section-form',
            store,
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
            watch: {},
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