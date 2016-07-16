var gulp = require('gulp'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    tsify = require('tsify'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    rename = require('gulp-rename')

function watchScripts () {

    var files = ['./src/game.ts']

    files.forEach(function (entry) {

        var name = entry.match(/\w+.\w+$/ig)[0],
            b = browserify({
            entries: [entry],
            cache: {},
            packageCache: {},
            plugin: [watchify, tsify]
        })

        b.on('log', gutil.log)

        b.on('update', bundle.bind(null, b, name) )

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

module.exports = watchScripts
