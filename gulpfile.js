const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('browsersync::init', () => {
  browserSync.init({
    server: {
      baseDir: './',
      directory: true,
    },
  });
});

gulp.task('browsersync::reload', () => {
  browserSync.reload();
});

gulp.task('gulp::watch', () => {
  gulp.watch(
    ['./**/*.js', './**/*.css', './**/*.html', './node_modules/**/*.*'],
    ['browsersync::reload'],
  );
});

gulp.task('default', ['browsersync::init', 'gulp::watch'], () => {
  console.log('gulp started 💻');
});
