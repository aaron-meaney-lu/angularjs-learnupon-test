const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const clean = require('gulp-clean');

function compile() {
  return src(['./app/app.module.js', './app/components/*/*.js'])
    .pipe(concat('source.js'))
    //.pipe(minify({noSource: true}))
    .pipe(dest('./build/'));
}

exports.compile = compile;
