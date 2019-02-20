const gulp = require('gulp');
const watch = require('gulp-watch');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.task('clean', function() {
  return gulp.src('build', {
      read: false,
      allowEmpty: true
    })
    .pipe(clean());
});

gulp.task('build', function() {
  return gulp.src(['./app/app.module.js', './app/components/*/*.js'])
    .pipe(concat('app.js'))
    .pipe(minify({
      ext: {
        min: '.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest('./build'))
});

gulp.task('build-watch', function() {
  return watch(['./app/app.module.js', './app/components/*/*.js'], gulp.series(['default']));
});

gulp.task('default', gulp.series(['clean', 'build']));
