<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="/css/main.min.css" rel="stylesheet" type="text/css"/>
        <title>Werkwijze 2.0.</title>
    </head>

    <body>
        <div class="barba-bg"></div>

        <div id="barba-wrapper">
            <div class="barba-container">
                <main>

                    {{--<div id="section-form">--}}
                    {{--<a href="#" @click.prevent="modalVisible = !modalVisible">test</a>--}}

                    {{--<div class="grid-container">--}}
                    {{--<div class="grid-x grid-margin-x small-up-2 medium-up-4 large-up-6 xlarge-up-8 xlarge-up-12">--}}
                    {{--<div class="cell small-6">A cell with a lot of text</div>--}}
                    {{--<div class="cell">A cell</div>--}}
                    {{--<div class="cell">A cell</div>--}}
                    {{--<div class="cell">A cell</div>--}}
                    {{--<div class="cell">A cell</div>--}}
                    {{--<div class="cell">A cell</div>--}}
                    {{--<div class="cell">A cell</div>--}}
                    {{--<div class="cell">A cell</div>--}}
                    {{--<div class="cell">A cell</div>--}}
                    {{--<div class="cell">A cell</div>--}}
                    {{--</div>--}}
                    {{--</div>--}}
                    {{--</div>--}}

                    {{--<div id="modal">--}}
                    {{--<div class="modal" :class="{'modal--visible': modalVisible}">--}}
                    {{--<div class="modal__contentWrapper" @click.self="modalVisible = false">--}}
                    {{--<div class="modal__content">--}}
                    {{--<h1 class="modal__title">Dit is een modal.</h1>--}}
                    {{--<p class="modal__text">Dis een modal text.</p>--}}

                    {{--<a href="#" @click.prevent="modalVisible = false" class="modal__close">--}}
                    {{--<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1792 1792">--}}
                    {{--<path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"/>--}}
                    {{--</svg>--}}
                    {{--</a>--}}
                    {{--</div>--}}
                    {{--</div>--}}
                    {{--</div>--}}
                    {{--</div>--}}

                    {{--<div id="datepicker">--}}
                    {{--<input type="text" class="datepicker" placeholder="Please enter a date here" />--}}
                    {{--</div>--}}

                    <a href="/test">test link</a>

                    <div id="videoBG">
                        <div class="video-bg">
                            <video id="video-element" class="video-js video-bg__video">
                                <source src="https://player.vimeo.com/external/276055579.hd.mp4?s=7a72d89eb01f6fe0cd0571f23775dbe903c6c2f4&profile_id=174" type='video/mp4'>
                            </video>
                        </div>
                    </div>
                </main>

                <script src="/js/vendors.min.js" type="text/javascript"></script>
                <script src="/js/app.min.js" type="text/javascript"></script>
            </div>
        </div>

    </body>

</html>
