const gulp = require('gulp');
const watch = require('gulp-watch');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const templateCache = require('gulp-angular-templatecache');

const jsSources = ['./app/app.module.js' ,'./app/app.config.js' ,'./app/components/*/*.js']

gulp.task('clean', function() {
  return gulp.src('build', {
      read: false,
      allowEmpty: true
    })
    .pipe(clean());
});

gulp.task('build-js', function() {
  return gulp.src(jsSources)
    .pipe(concat('app.js'))
    .pipe(minify({
      ext: {
        min: '.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest('./build'))
});

gulp.task('build-html', function() {
  return gulp.src(['./index.html'])
    .pipe(gulp.dest('./build'));
});

gulp.task('build-templates', function() {
  return gulp.src(['./app/templates/*.html'])
    .pipe(templateCache({module: 'mainApp'}))
    .pipe(gulp.dest('./build'))
});

gulp.task('build', gulp.parallel('build-js', 'build-templates', 'build-html'));

gulp.task('build-watch', function() {
  return watch(jsSources, gulp.series(['default']));
});

gulp.task('default', gulp.series(['clean', 'build']));
