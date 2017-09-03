'use strict';

var gulp        = require('gulp');
var concat      = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: '',
    }
  });
});

gulp.task('concat', function () {
  
  return gulp.src(['./src/**/*'])
    .pipe(concat('ng-mdl.js'))
    .pipe(gulp.dest('./'));

});