const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const image = require('gulp-image');
const rename = require("gulp-rename");
const cssnano = require("gulp-cssnano");

// SASS, mimifica, move para a pasta dist e renomeia para app.min
function css() {
  return gulp.src(['src/sass/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({
      basename: "app",
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css/'));
}
// Mimifica, move para a pasta dist e renomeia para app.min
function js() {
  return gulp.src(['src/js/geral.js'])
    .pipe(uglify())
    .pipe(rename({
      basename: "app",
      suffix: ".min",
      extname: ".js"
    }))
    .pipe(gulp.dest('dist/js'));
}
// Move as imagens para a pasta dist e otimiza o peso
function image_move() {
  return gulp.src('src/img/*')
    .pipe(image())
    .pipe(gulp.dest('dist/img'));
}

// Monitora as automações no terminal
function watchFiles() {
  gulp.watch('src/sass/**/*.scss', css);
  gulp.watch('src/js/geral.js', js);
  gulp.watch('src/img/*', image_move);
}

const watch = gulp.parallel(watchFiles);

// export tasks
exports.css = css;
exports.js = js;
exports.image_move = image_move;
exports.default = watch;
