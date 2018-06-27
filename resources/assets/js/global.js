let Global = {
    Blazy: function () {
        new Blazy({
            breakpoints: [{
                width: 0,
                src: 'data-src-small'
            }, {
                width: 640,
                src: 'data-src-medium'
            }, {
                width: 1024,
                src: 'data-src-large'
            }, {
                width: 1200,
                src: 'data-src-xlarge'
            }, {
                width: 1440,
                src: 'data-src-xxlarge'
            }]
        })
    },
    Barba: function () {
        let FadeTransition = Barba.BaseTransition.extend({
            start: function () {
                // As soon the loading is finished and the old page is faded out, let's fade the new page
                Promise
                    .all([this.newContainerLoading, this.fadeOut()])
                    .then(this.fadeIn.bind(this));
            },

            fadeOut: function () {
                return new Promise((resolve, reject) => {
                    document.querySelector('.barba-bg').className += ' barba-bg--visible';

                    window.setTimeout(function () {
                        resolve();
                    }, 500);
                });
            },

            fadeIn: function () {
                let _this = this;
                (this.oldContainer).style.display = 'none';

                document.querySelector('.barba-bg').classList.remove('barba-bg--visible');

                _this.done();
            }
        });

        Barba.Pjax.getTransition = function () {
            return FadeTransition;
        };
        },
    Init: function () {
        Global.Blazy();
        Global.Barba();
    }
};

document.addEventListener("DOMContentLoaded", function () {
    Global.Init();
    Barba.Pjax.start();
});

Barba.Dispatcher.on("transitionCompleted", function () {
    Global.Init();
});
