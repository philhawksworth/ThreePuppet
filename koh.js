var express	= require('express'),
	gzippo	= require('gzippo'),
	fs = require('fs'),
	app = express.createServer();

app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.session({
		secret: 'ssssssshhhhhhhhhhhhhhhhhhhhhhh I said shhhhhhhhhhhhhhhhh'
	}));
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.set('view options', {layout: false});
	app.use(express.static(__dirname + '/static/dev'));
});

app.configure('development', function() {
	app.use(express.logger());
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
});

app.configure('production', function() {
	var oneWeek = 604800000;

//	app.use(gzippo.staticGzip(__dirname + '/static/prod', {maxAge: oneWeek}));
	app.use(gzippo.compress());
});

fs.readdir('controllers', function(err, files) {
    for (var i = 0, fileCount = files.length; i < fileCount; i++) {
        require('./controllers/' + files[i]).setup(app);
    }
});

app.listen(9090);