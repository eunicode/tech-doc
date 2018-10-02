// Code pieced together from 
// https://css-tricks.com/gulp-for-beginners/
// https://scotch.io/tutorials/how-to-use-browsersync-for-faster-development
// https://travismaynard.com/writing/getting-started-with-gulp

// gulpfile updated to work with gulp 4 (gulp.task + gulp.series)
// https://www.liquidlight.co.uk/blog/article/how-do-i-update-to-gulp-4/
// https://github.com/gulpjs/gulp/blob/4.0/docs/recipes/minimal-browsersync-setup-with-gulp4.md

// Browsersync Docs
// https://browsersync.io/docs/api
// https://browsersync.io/docs/options

// Include gulp
var gulp = require('gulp');

// Require the Browsersync module export
// Create an unnamed Browsersync instance. This allows you to call methods on the instance instead
// of the main Browsersync module export
var browserSync = require('browser-sync').create();

// Development Tasks 

function serve(done) {
  // Start BrowserSync service. It will launch a server.
  // First argument is the configuration object for your Browsersync instance
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });
  done();
}

function reload(done) {
  // The `reload` method will inform browser about changed files and cause a refresh or inject files
  browserSync.reload();
  done();
}

function watch() {
  gulp.watch('src/*.html', reload);
  gulp.watch('src/css/*.css', reload); 
  gulp.watch('src/js/*.js', reload); 
}

// Default Task
gulp.task('default', gulp.series(serve, watch));

// Run the gulp command `gulp` in project directory