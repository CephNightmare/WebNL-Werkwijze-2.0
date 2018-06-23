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
            src: [
                paths.node + 'vue/dist/vue.js',
                paths.node + 'blazy/blazy.min.js',
                "js/**/*.js"
            ],
            dest: paths.dist + 'js/'
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