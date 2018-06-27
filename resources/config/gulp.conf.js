module.exports = function ()
{
    var paths = {
        node: '../node_modules/',
        dist: '../public/',
        src: 'assets/',
        root: '../'
    };

    var config = {
        paths: paths,
        js: {
            vendors: {
                src: [
                    paths.node + "barba.js/dist/barba.js",
                    paths.node + "blazy/blazy.js",
                    paths.node + "moment/moment.js",
                    paths.node + "es6-promise/dist/es6-promise.js",
                    paths.node + "video.js/dist/video.js",
                    paths.node + "pikaday/pikaday.js",
                    paths.node + "vee-validate/dist/vee-validate.js",
                    paths.node + "vuex/dist/vuex.js",
                    paths.node + "vue/dist/vue.js",
                ],
                dest: paths.dist + 'js/',
            },
            main: {
                src: [
                    paths.src + "js/global.js",
                    paths.src + "js/api/**/*.js",
                    paths.src + "js/store/**/*.js",
                    paths.src + "js/components/**/*.js",
                ],
                dest: paths.dist + 'js/',
                watch: paths.src + 'js/**/*.js',
            },
        },
        scss: {
            watch: paths.src + 'scss/**/*.scss',
            src: [
                paths.src + 'scss/main.scss'
            ],
            dest: paths.dist + 'css/'
        },
        images: {
            src: paths.src + 'img/**/*',
            watch: paths.src + 'img/**/*',
            dest: paths.dist + 'img/'
        },
        blade: {
            watch: paths.root + 'resources/views/**/*.php',
        },
        fonts: {
            src: [
                paths.src + 'fonts/**/*'
            ],
            dest: paths.dist + 'fonts/'
        }
    };

    return config;
};