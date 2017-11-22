var
    gulp = require('gulp'),
    pug = require('gulp-pug')
;

//pug
gulp.task('pug', function(){
    return gulp.src('src/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/html/'))
});