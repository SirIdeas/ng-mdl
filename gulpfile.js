'use strict';

var gulp        = require('gulp');
var gutil       = require('gulp-util');
var gwebpack    = require('gulp-webpack');
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

gulp.task('scripts', function () {
  var webpackOptions = {
    watch: false,
    devtool: 'inline-source-map',
    module: {
      // preLoaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}],
      loaders: [{ test: /\.js$/, exclude: /node_modules/, loaders: ['ng-annotate', 'babel-loader?presets[]=es2015']}]
    },
    output: { filename: 'ng-mdl.js' }
  };
  var webpackChangeHandler = function(err, stats) {
    if(err) {
      conf.errorHandler('Webpack')(err);
    }
    gutil.log(stats.toString({
      colors: gutil.colors.supportsColor,
      chunks: false,
      hash: false,
      version: false
    }));
  };
  return gulp.src(['./src/index.js'])
    .pipe(gwebpack(webpackOptions, null, webpackChangeHandler))
    .pipe(gulp.dest('./'));
});