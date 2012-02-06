var views = {},
    viewCount = 0,
    players = {},
    playerCount = 0,
    koth = -1,
    idCount = 0;

var handleSockets = function(sockets) {
    sockets.on('connection', function(socket) {
        socket.on('new view', function() {
            var isMaster = !!(viewCount === 0),
                viewportId = idCount++;

            socket.viewportId = viewportId;
            socket.viewportMaster = isMaster;

            socket.emit('view connect', isMaster);
            viewCount++;
            views[viewportId] = socket;
        });

        socket.on('new player', function() {
            var playerId = idCount++;

            socket.playerId = playerId;
            players[playerId] = socket;
            if (playerCount === 0) {
                koth = playerId;
                socket.emit('take control');
            }
            playerCount++;
        });

        socket.on('disconnect', function() {
            var viewportId = socket.viewportId;

            if (typeof viewportId === 'number') {
                if (views[viewportId].viewportMaster) {
                    if (--viewCount > 0) {
                        for (var id in views) {
                            views[id].emit('view connect', true);
                            views[id].viewportMaster = true;
                            break;
                        }
                    }
                }
                delete views[viewportId];

            } else {
                playerCount--;
                if (koth === socket.playerId) {
                    koth = -1;
                    if (playerCount > 0) {
                        for (var id in players) {
                            players[id].emit('take control');
                            koth = id;
                            break;
                        }
                    }
                }
                delete players[id];
            }
        });

        socket.on('init-puppet', function(data) {
            socket.broadcast.emit('init-puppet');
         });
         socket.on('quilombo', function(data) {
             socket.broadcast.emit('quilombo');
         });

         socket.on('move', function(data) {
             socket.broadcast.emit('move', data);
         });

         socket.on('camera', function(data) {
             socket.broadcast.emit('camera', data);
         });
         socket.on('center', function(data) {
             socket.broadcast.emit('center');
         });
    });
};

var setup = function(app) {
    var io = require('socket.io').listen(app);

    io.configure(function() {
        io.set('transports', ['websocket']);
    });

    handleSockets(io.sockets);
};

module.exports.setup = setup;