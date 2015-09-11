var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jeet = require('jeet');
var rupture = require('rupture');
var nib = require('nib');
var connect = require('gulp-connect');

// Get one .styl file and render 
gulp.task('stylus', function () {
  gulp.src('stylus/**/*.styl')
    .pipe(stylus({
    	use:[jeet(),rupture(),nib()]
    	}))
    .pipe(gulp.dest('css/'));
});

gulp.task('html', function () {
  gulp.src('./budgetbookscan/*.html')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    // directoryListing : true,
    port: 3000,
    livereload: true
  });
});

gulp.task('wsh', function(){
  gulp.watch('./budgetbookscan/*.html', ['html']);
  gulp.watch('stylus/**/*.styl', ['stylus']);

});


gulp.task('default', ['wsh', 'connect',]);
