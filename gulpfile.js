var gulp = require('gulp'),
    buildScripts = require('./build/buildScripts'),
    watchScripts = require('./build/watchScripts')

gulp.task(
    'watch-scripts',
    watchScripts
)

gulp.task(
    'build-scripts',
    buildScripts
)

gulp.task(
    'watch',
    ['watch-scripts']
)

gulp.task(
    'build',
    ['build-scripts']
)

gulp.task(
    'default',
    ['build']
)
