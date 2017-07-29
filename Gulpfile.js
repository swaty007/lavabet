var gulp          = require('gulp'),
    connect       = require('gulp-connect'),
    sass          = require('gulp-sass'),
    prefix        = require('gulp-autoprefixer'),
    minifyCSS     = require('gulp-minify-css'),
    autowatch     = require('gulp-autowatch'),
    plumber       = require('gulp-plumber'),
    imagemin      = require('gulp-imagemin'),
    uglify        = require('gulp-uglify');


// HTML

gulp.task('htmls', function () {
    gulp.src(['*.html'])
        .pipe(connect.reload());
});


// SCSS

gulp.task('styles', function() {
    return gulp.src(['css/scss/main.scss'] )
        .pipe(plumber())
        .pipe(sass())
        //.pipe(prefix([{  browsers: ['IE 8', 'IE 9', 'last 5 versions', 'Firefox 14', 'Opera 11.1']  }]))
        .pipe(minifyCSS({keepBreaks: true}))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

// gulp.task('basicshopStyles', function() {
//   return gulp.src('css/less/basicShop.less')
//     .pipe(plumber())
//     .pipe(less())
//     .pipe(prefix([{  browsers: ['IE 8', 'IE 9', 'last 5 versions', 'Firefox 14', 'Opera 11.1']  }]))
//     .pipe(minifyCSS({keepBreaks: true}))
//     .pipe(gulp.dest('css'))
//     .pipe(connect.reload());
// });

// JS

// WATCH

var paths = {
    htmls:          ['*.html'],
    // basicshopStyles: 'ccs/less/basicShop/*.less',
    styles:         'css/scss/**/*.scss'
};

gulp.task('watch', function(cb) {
    autowatch(gulp, paths);
    return cb();
});

// LIVERELOAD

gulp.task('connect', function() {
    connect.server({
        port: '8000',
        livereload: true
    });
});

// DEFAULT

gulp.task('default',  [
    'connect',
    // 'basicshopStyles',
    'styles',
    'watch'
]);

gulp.task('images', function() {
    gulp.src('img/**/*') // берем любые файлы в папке и ее подпапках
        .pipe(imagemin()) // оптимизируем изображения для веба
        .pipe(gulp.dest('img/min')) // результат пишем по указанному адресу

});