var gulp = require('gulp');  //加载gulp
var uglify = require('gulp-uglify');  //加载js压缩

// 定义一个任务 compass
gulp.task('compass', function () {
    gulp.src(['js/*.js','!js/*.min.js'])  //获取文件，同时过滤掉.min.js文件
        .pipe(uglify())
        .pipe(gulp.dest('javascript/'));  //输出文件
});


var gulp = require('gulp');
var minify = require('gulp-minify-css');

gulp.task('cssmini', function () {
    gulp.src(['css/*.css', '!css/*.min.css'])  //要压缩的css
        .pipe(minify())
        .pipe(gulp.dest('buildcss/'));
});


var gulp = require('gulp');
var htmlmini = require('gulp-minify-html');

gulp.task('htmlmini', function () {
    gulp.src('*.html')
        .pipe(htmlmini())
        .pipe(gulp.dest('minihtml'));
});

var gulp = require('gulp');
var jshint = require("gulp-jshint");

gulp.task('jsLint', function () {
    gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter()); // 输出检查结果
});


var gulp = require('gulp');
var concat = require("gulp-concat");

gulp.task('concat', function () {
    gulp.src('js/*.js')  //要合并的文件
    .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
    .pipe(gulp.dest('dist/js'));
});


var gulp = require('gulp'),
    less = require("gulp-less");

gulp.task('compile-less', function () {
    gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});


var gulp = require('gulp'),
    sass = require("gulp-sass");

gulp.task('compile-sass', function () {
    gulp.src('sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});



var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant'); //png图片压缩插件

gulp.task('default', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()] //使用pngquant来压缩png图片
        }))
        .pipe(gulp.dest('dist'));
});


var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');

gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen(); //要在这里调用listen()方法
  gulp.watch('less/*.less', ['less']);  //监听目录下的文件，若文件发生变化，则调用less任务。
});
