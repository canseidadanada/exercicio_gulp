const gulp= require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps= require('gulp-sourcemaps');
const obfuscate = require('gulp-obfuscate');

function jsCompressor(){
    return gulp.src('./source/scripts/*js')
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'))
}

function sassCompiler(){
    return gulp.src ('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

function functionDefault()