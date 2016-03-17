var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('yashare', function() {
    gulp.src('./src/yashare.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});
