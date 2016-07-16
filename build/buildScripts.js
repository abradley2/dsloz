var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    tsify = require('tsify'),
    source = require('vinyl-source-stream'),
    rename = require('gulp-rename')

function buildScripts () {

    var files = ['./src/game.ts']

    files.forEach(function (entry) {

        var name = entry.match(/\w+.\w+$/ig)[0],
            b = browserify({
            entries: [entry],
            cache: {},
            packageCache: {},
            plugin: [tsify]
        })

        bundle(b, name)
    })

    function bundle (b, name) {

        b.bundle()
            .on('error', function (err) {
                console.log(err.toString())
                this.emit('end')
            })
            .pipe(source(name))
            .pipe(rename({
                extname: '.js'
            }))
            .pipe(gulp.dest('./public/dist'))

    }

}

module.exports = buildScripts
