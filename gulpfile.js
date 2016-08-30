var gulp = require("gulp");
var gutil = require("gulp-util");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");


// compile ts files into dist folder
gulp.task("build", function () {
    return tsProject.src()
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest("dist"));
});


// watch changes on ts files to auto build them
gulp.task("watch", function () {
    return gulp.watch('src/**/*.ts', ['build']);
});


// By default, compile
gulp.task("default", ['build']);


