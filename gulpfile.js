const gulp = require('gulp');
const watch = require('gulp-watch');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const mergeStream = require('merge-stream');
const templateCache = require('gulp-angular-templatecache');

const jsSources = ['./app/app.module.js' ,'./app/app.config.js' ,'./app/components/*/*.js']
const templateSources = ['./app/templates/*.html'];
const htmlSources = ['./index.html'];
const allSources = jsSources.concat(htmlSources, templateSources);

const buildDir = './build';

gulp.task('clean', function() {
  return gulp.src('build', {
      read: false,
      allowEmpty: true
    })
    .pipe(clean());
});

gulp.task('build-js', function() {
  const jsStream = gulp.src(jsSources)

  const templateStream = gulp.src(templateSources)
    .pipe(templateCache({module: 'mainApp'}));

  return mergeStream(jsStream, templateStream)
    .pipe(concat('app.js'))
    .pipe(minify({
      ext: {
        min: '.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest(buildDir));
});

gulp.task('build-html', function() {
  return gulp.src(htmlSources)
    .pipe(gulp.dest(buildDir));
});

gulp.task('build', gulp.parallel('build-js', 'build-html'));

gulp.task('build-watch', function() {
  return watch(allSources, gulp.series(['default']));
});

gulp.task('default', gulp.series(['clean', 'build']));
