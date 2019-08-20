var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');

// сжиматель html кода
gulp.task('htmlmin', function() {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
});

// сжиматель css кода
gulp.task('minify-css', function() {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

// сжиматель js кода
gulp.task('minify-js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js'));
});

// перекидыает шрифты
gulp.task('fonts', function() {
  return gulp.src('./src/fonts/*/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('tinypng', function (done) {
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
      .pipe(tinypng({
        key: 'hjZK0hkdhJjf3P8xL65qSsRY5vCJPFCY',
        sigFile: 'images/.tinypng-sigs',
        log: true
      }))
      .pipe(gulp.dest('dist/img/'));
  done();
});

// gulp all
gulp.task('all', gulp.series('htmlmin','minify-css','fonts','minify-js', 'tinypng', function()  {}));
// gulp all2
gulp.task('all2', gulp.series('htmlmin','minify-css', 'minify-js', function()  {}));