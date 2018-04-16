var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	/*less*/
	less = require('gulp-less'),
	fontmin = require('gulp-fontmin'),
	cssnano = require('gulp-cssnano'),
	autoprefix = require('gulp-autoprefixer'),
	rimraf = require('gulp-rimraf'),
	uglify = require('gulp-uglify'),
	/*jshint = require('gulp-jshint'),*/
	imagemin = require('gulp-image'),
	htmlmin = require('gulp-htmlmin'),
	replace = require('gulp-replace'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload');

var config = require('./config');

gulp.task('less', function () {
	return gulp.src('./less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./css'));
});


//sass编译gulp-sass、gulp-plumber
//CSS自动加浏览器前缀
/*
 * “gulp-autoprefixer”可以自动加“-webkit”、“-moz”等的前缀，自己可以少写很多兼容代码。可以在上面的sass的编译中添加一个引用。
 有多个参数，点击查看说明。“last 2 versions”是浏览器的过滤设置，还有多个值，可以查看这里。插件并不仅仅是加个前缀，还能编译出旧的语法。例如flex的不同写法。
 * */
gulp.task('sass', function() {
	gulp.src('./sass/*.scss')
			.pipe(plumber())
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefix({
				browsers: ['last 2 versions', 'Firefox < 20'],
				cascade: false
			}))
			.pipe(gulp.dest('./css'))
			.pipe(livereload());
});

//css压缩 gulp-cssnano
gulp.task('css', ['sass'], function() {
	//先删除dist中的css，有时候会不更新
	gulp.src('./dist/css/*.css')
        .pipe(rimraf({force: true}));
        
	gulp.src('./css/*.css')
		.pipe(cssnano())
		.pipe(gulp.dest('./dist/css'))
		.pipe(livereload());
});

//字体压缩
/*
* 网上有很多webfont，例如国外的Font Awesome，国内的iconfont。都能做出漂亮的自定义字体。
  与西文字体不同，由于字符集过大，中文字体无法享受 webfont 带来的便利。为了让中文字体也乘上这道风，我们需要对其进行min。使用指令“gulp-fontmin”。
* */
gulp.task('font', function() {
	gulp.src('./font/*.+(eot|svg|ttf|woff)')
      .pipe(fontmin({
          text: '人晒'
      }))
      .pipe(gulp.dest('./dist/font'));
});

//js压缩 使用gulp-uglify做js的压缩。gulpRimraf()用来删除文件夹，引用自gulp-rimraf。
//jshint是用来分析代码的，例如分号没写。通过打指令“gulp-jshint”。
gulp.task('js', function() {
	//先删除dist中的css，有时候会不更新
	gulp.src('./dist/js/*.js')
        .pipe(rimraf({force: true}));
        
	gulp.src('./js/*.js')
		.pipe(plumber())
		/*.pipe(jshint())
		.pipe(jshint.reporter('default'))*/
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
		.pipe(livereload());
});

//模块化合并使用webpack-stream
gulp.task('webpack', function(){
	var entry = {};
	for(var name in config.webpackEntry){
		entry[name] = './js/' + config.webpackEntry[name];
	}
	//排除bundle文件
	return gulp.src('./js/*[^bundle].js')
		.pipe(plumber())
		.pipe(webpack({
			entry: entry,
			output: {
				filename: '[name].bundle.js',
			}
		}))
		.pipe(gulp.dest('./js'));
});

//图片无损压缩  通过gulp-image压缩的图片，有时候能牙70%以上，非常给力
gulp.task('image', function(){
	gulp.src('./img/*.+(jpg|png|gif|svg)')
	   .pipe(imagemin())
	   .pipe(gulp.dest('./dist/img'));
});

//html压缩
/*
* 经过gulp-htmlmin压缩过的html可以缩小很多，可以看到都挤到了一起，有很多参数可以选择，比如去除空格等。
  还可以通过gulp-replace来给静态资源文件加个版本号。
* */
gulp.task('html', function() {
	gulp.src('*.html')
		.pipe(replace('__VERSION', Date.now().toString(16)))
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist'))
		.pipe(livereload());
});

//启动一个本地调试服务器
gulp.task('server', function(){
    var option = {
        root : config.devPath,
		/*root : config.prodPath,*/
        port : config.server.port
    };
    if(config.server.root){
        option.root = config.server.root;
    }
    connect.server(option);
});

//监控
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('**.html', ['html']);
  	gulp.watch('./sass/*.scss', ['sass']);
	gulp.watch('./less/*.less', ['less']);
  	gulp.watch('./css/*.css', ['css']);
  	gulp.watch('./js/*.js', ['js']);
});

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});