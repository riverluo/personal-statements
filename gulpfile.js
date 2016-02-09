var gulp = require('gulp'); 
var ghPages = require('gulp-gh-pages'); 
var exec = require('child_process').exec; 

gulp.task('deploy', ['build'], function () {
  return gulp.src('./_book/**/*')
  .pipe(ghPages());
});

gulp.task('build', function (cb) {
  exec('gitbook build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err); 
  });
});

gulp.task('default', ['deploy']);
