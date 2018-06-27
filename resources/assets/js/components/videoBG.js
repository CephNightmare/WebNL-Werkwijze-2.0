Barba.Dispatcher.on("transitionCompleted", function () {
    if (document.getElementById("videoBG")) {
        const videoBG = new Vue({
            el: '#videoBG',
            store,
            data: function () {
                return {}
            },
            computed: {},
            mounted: function () {
                this.initiateBGVideo()
            },
            methods: {
                initiateBGVideo: function () {
                    let video = videojs('#video-element', {
                        autoplay: !this.$store.state.isMobile,
                        muted: true,
                        controls: true
                    });
                }
            },
            created: function () {
            },
            destroyed: function () {
            }
        });
    }
});