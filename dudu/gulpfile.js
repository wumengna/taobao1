var gulp=require('gulp');


gulp.task("copy-images",function(){
	gulp.src("images/**/*")
	.pipe(gulp.dest("D:/phpStudy/WWW/test0705/dudu/images"));//这里改成你php里www的文件夹位置，下面也是
});
gulp.task("copy-img",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:/phpStudy/WWW/test0705/dudu/img"));
});
gulp.task("copy-imgs",function(){
	gulp.src("imgs/*")
	.pipe(gulp.dest("D:/phpStudy/WWW/test0705/dudu/imgs"));
});
gulp.task("copy-html",function(){
	gulp.src("html/**/*")
	.pipe(gulp.dest("D:/phpStudy/WWW/test0705/dudu/html"));
});
gulp.task("copy-css",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("D:/phpStudy/WWW/test0705/dudu/css"));
});
gulp.task("copy-js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:/phpStudy/WWW/test0705/dudu/js"));
});
gulp.task("copy-php",function(){
	gulp.src("php/**/*")
	.pipe(gulp.dest("D:/phpStudy/WWW/test0705/dudu/php"));
});
gulp.task("copy-index",function(){
	gulp.src("index.html")
	.pipe(gulp.dest("D:/phpStudy/WWW/test0705/dudu/xiangmu"));
});
gulp.task("watch",function(){
	gulp.watch("css/**/*",["copy-css"]);
	gulp.watch("js/**/*",["copy-js"]);
	gulp.watch("images/**/*",["copy-images"]);
	gulp.watch("php/**/*",["copy-php"]);
	gulp.watch("html/**/*",["copy-html"]);
	gulp.watch("index",["copy-index"]);	
});

