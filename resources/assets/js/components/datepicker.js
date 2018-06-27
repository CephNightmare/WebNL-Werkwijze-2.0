Barba.Dispatcher.on("transitionCompleted", function() {
    if (document.getElementById("datepicker")) {
        const DatePicker = new Vue({
            el: '#datepicker',
            store,
            data: function () {
                return {}
            },
            computed: {
            },
            watch: {
            },
            mounted: function () {
                this.initiateDatepicker()
            },
            methods: {
                initiateDatepicker: function () {
                    const i18n_nl = {
                        previousMonth: 'Vorige maand',
                        nextMonth: 'Volgende maand',
                        months: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
                        weekdays: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
                        weekdaysShort: ['Zo', 'Ma', 'Di', 'Woe', 'Do', 'Vr', 'Za']
                    };

                    let picker = new Pikaday({
                        field: document.querySelector('.datepicker'),
                        format: 'D MMM YYYY',
                        i18n: i18n_nl,
                        firstDay: 1
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
