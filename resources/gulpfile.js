var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    doiuse = require('doiuse'),
    expect = require('gulp-expect-file'),
    fs = require('fs'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    reporter = require('postcss-reporter'),
    sass = require('gulp-sass'),
    syntax_scss = require('postcss-scss'),
    cssnext = require('postcss-cssnext'),
    stylelint = require('stylelint'),
    uglify = require('gulp-uglify'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    imageminPngquant = require('imagemin-pngquant'),
    imageminZopfli = require('imagemin-zopfli'),
    imageminMozjpeg = require('imagemin-mozjpeg'), //need to run 'brew install libpng'
    imageminGiflossy = require('imagemin-giflossy'),
    plumber = require('gulp-plumber'),
    util = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    del = require('del'),
    newer = require('gulp-newer'),
    babel = require("gulp-babel");

var config = require("./config/gulp.conf.js")();

var stylelintConfig = require('./stylelint.json');

var processors = [
    stylelint(stylelintConfig),
    reporter({
        clearReportedMessages: false,
        throwError: false
    })
];


gulp.task('js', function () {
    return gulp.src(config.js.main.src)
        .pipe(sourcemaps.init())
        .pipe(expect(config.js.main.src))
        .pipe(babel())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.js.main.dest));
});


gulp.task('vendors', function () {
    return gulp.src(config.js.vendors.src)
        .pipe(sourcemaps.init())
        .pipe(expect(config.js.vendors.src))
        .pipe(concat('vendors.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.js.vendors.dest));
});


gulp.task('scss_lint', function () {
    return gulp.src(config.scss.watch)
        .pipe(postcss(processors, {syntax: syntax_scss}));
});


gulp.task('scss', ['scss_lint'], function () {
    return gulp.src(config.scss.src)
        .pipe(plumber())
        .pipe(expect(config.scss.src))
        .pipe(sass({
            errLogToConsole: true,
            includePaths: [
                config.paths.node
            ]
        }))
        // autoprefix where needed
        .pipe(autoprefixer({
            cascade: false,
        }))
        // clean and minify css
        // Note that cleancss optimization level < 2
        // level 2 will break BEM class ordering by merging classes
        .pipe(cleanCss({
            compatibility: 'ie11',
            level: {
                1: {
                    specialComments: 0
                }
            }
        }))
        // .pipe(postcss([cssnext()]))
        .pipe(sourcemaps.write())
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest(config.scss.dest))
        .pipe(browserSync.stream());
});


//Checks feature usage, shows error when feature is being used that is not supported by the defined browsers
gulp.task('doiuse', function () {
    return gulp.src('../public/css/app.min.css')
        .pipe(postcss([
            doiuse({
                browsers: [
                    '> 5%',
                    'last 1 chrome version',
                    'last 1 firefox version',
                    'last 1 IE version',
                    'last 1 Opera version',
                    'last 1 Safari version',
                    'iOS > 7',
                    'not dead'
                ],
                onFeatureUsage: function (usageInfo) {
                    console.log(usageInfo.message)
                }
            })
        ]))
});


// Browser sync
gulp.task('browser-sync', function () {
    browserSync.init(
        [
            config.paths.dist + '/css/*.css',
            config.paths.dist + '/js/*.js',
            config.paths.root + '/resources/views/*.php'
        ], {
        proxy: 'localhost:8000',
    });
});


gulp.task('clean', function(cb) {
    return del(
        [config.paths.dist + '/css', config.paths.dist + '/img', config.paths.dist + '/js'], {
        force: true
    });
});


gulp.task('images', function() {
    return gulp.src(config.images.src)
        .pipe(newer(config.images.dest))
        .pipe(cache(imagemin([
            //png
            imageminPngquant({
                speed: 1,
                quality: 98 //lossy settings
            }),
            imageminZopfli({
                more: true
                // iterations: 50 // very slow but more effective, therefore disabled. Enable at your own discretion
            }),
            //gif
            imageminGiflossy({
                optimizationLevel: 3,
                optimize: 3, //keep-empty: Preserve empty transparent frames
                lossy: 2
            }),
            //svg
            imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            }),
            //jpg lossless
            imagemin.jpegtran({
                progressive: true
            }),
            //jpg very light lossy, use vs jpegtran
            imageminMozjpeg({
                quality: 90
            })
        ])))
        .pipe(gulp.dest(config.images.dest));
});


gulp.task('fonts', function () {
    return gulp.src(config.fonts.src)
        .pipe(expect(config.fonts.src))
        .pipe(gulp.dest(config.fonts.dest));
});


gulp.task('assets', ['images', 'fonts']);


gulp.task('default', ['scss', 'js', 'assets']);


gulp.task('watch', ['browser-sync'], function () {
    gulp.watch(config.scss.watch, ['scss']);
    gulp.watch(config.images.watch, ['images']);
    gulp.watch(config.js.main.watch, ['js']);
    gulp.watch(config.js.vendors.watch, ['vendors']);
});

