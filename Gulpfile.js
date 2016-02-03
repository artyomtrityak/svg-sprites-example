'use strict';

var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
plumber = require('gulp-plumber'),
config = {
    "log": "debug",
    "mode": {
        "symbol": true
    }
};

gulp.task('default', function() {
    return gulp.src('**/*.svg', {cwd: 'svg-icons'})
        .pipe(plumber())
        .pipe(svgSprite(config)).on('error', (error) => { console.log(error); })
        .pipe(gulp.dest('svg-sprites'))
});