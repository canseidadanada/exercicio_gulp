const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function jsCompressor() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

function sassCompiler() {
    return gulp.src('./source/styles/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function imageCompressor() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

exports.default = function () {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(sassCompiler));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(jsCompressor));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(imageCompressor));
};
