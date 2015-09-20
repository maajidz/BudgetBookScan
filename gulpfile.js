var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jeet = require('jeet');
var rupture = require('rupture');
var nib = require('nib');
// var connect = require('gulp-connect');
var browserSync = require('browser-sync').create();






// Get .styl files and render 
gulp.task('stylus', function () {
  gulp.src('stylus/**/*.styl')
    .pipe(stylus({
    	use:[jeet(),rupture(),nib()]
    	}))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({stream:  true}));
});






// gulp.task('html', function () {
//   gulp.src('./budgetbookscan/*.html')
//     .pipe(connect.reload());
// });



// gulp.task('connect', function() {
//   connect.server({
//     root: '.',
//     // directoryListing : true,
//     port: 3000,
//     livereload: true
//   });
// });

////////////////////////////////////////////
// Task for watching stylus and html files//
////////////////////////////////////////////

gulp.task('wsh', function(){

  browserSync.init({
      server: "."
  });
  gulp.watch('stylus/**/*.styl', ['stylus']);
  gulp.watch('**/*.html').on('change', browserSync.reload);
});


gulp.task('default', ['wsh', 'connect',]);
