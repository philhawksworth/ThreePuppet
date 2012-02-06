var uaParser = require('ua-parser');

var setup = function(app) {
    app.get('/', function(req, res) {
        var uaFamily = uaParser.parse(req.headers['user-agent']).family;

        if (uaFamily === 'iPhone' || uaFamily === 'iPad' || uaFamily === 'iPhone') {
            res.render('control');
        } else {
            res.redirect('/view.html');
        }
    });
};

module.exports.setup = setup;