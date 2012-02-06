var SK = {};

function addClass(el, name) {
	el.className += ' ' + name;
}

function removeClass(el, name) {
	el.className = el.className.replace(name, '');
}

var lastOrientation = '',
	initMod = 0,
	puppetInit = false;

SK.init = function() {
	var initLink = document.getElementById('init'),
		quilomboLink = document.getElementById('quilombo'),
		goLeft = document.getElementById('goleft'),
		goRight = document.getElementById('goright'),
		center = document.getElementById('center'),
		that = this;

	initLink.addEventListener('click', function(ev) {
		ev.preventDefault();

		puppetInit = true;
		that.socket.emit('init-puppet');
		initLink.style.display = 'none';
		that.initListeners();
		initLink.style.display = 'none';
		quilomboLink.style.display = 'block';
		goRight.style.display = 'block';
		goLeft.style.display = 'block';
		center.style.display = 'block';
	}, false);

	quilomboLink.addEventListener('click', function(ev) {
		ev.preventDefault();

		quilomboLink.style.display = 'none';
		that.socket.emit('quilombo');
	}, false);

	goLeft.addEventListener('touchstart', function(ev) {
	    ev.preventDefault();
	    SK.startMove(-1);
	});
	goLeft.addEventListener('touchend', function(ev) {
        ev.preventDefault();
        clearInterval(SK.moveInterval);
    });
	goRight.addEventListener('touchstart', function(ev) {
	    ev.preventDefault();
	    SK.startMove(1);
	});
	goRight.addEventListener('touchend', function(ev) {
        ev.preventDefault();
        clearInterval(SK.moveInterval);
    });
	center.addEventListener('click', function(ev) {
		ev.preventDefault();

		that.socket.emit('center');
	});

	initMod = window.orientation - 90;
	lastOrientation = 'or' + window.orientation;


	addClass(document.body, lastOrientation);
	window.addEventListener('orientationchange', function(ev) {
		if (!puppetInit) {
			initMod = window.orientation - 90;
		}
		removeClass(document.body, lastOrientation);
		lastOrientation = 'or' + window.orientation;
		addClass(document.body, lastOrientation);
	});
};

SK.moveInterval = null;

SK.sendMove = function(where) {
    this.socket.emit('camera', where * 5);
};

SK.startMove = function(whereTo) {
    SK.moveInterval = setInterval(function() {
        SK.sendMove(whereTo);
    }, 250);
};


SK.initComm = function() {
	var loca = window.location,
	    socket = io.connect(loca.protocol + '//' + loca.host);

	socket.on('connect', function() {
        socket.emit('new player');
    });

	socket.on('take control', function() {
	    document.getElementById('init').style.display = 'block';
	    document.getElementById('msg').style.display = 'none';
	    SK.init();
	});

	this.socket  = socket;
};

SK.initListeners = function() {
	var socket = this.socket,
		vrAlpha, vrBeta, vrGamma,	// vrAlpha = sum of acceleration in X degrees/sec
		lvrAlpha, lvrBeta, lvrGamma,
		aX = 0, aY = 0, aZ = 0,
		vX, vY, vZ,
		lvX = 0,
		lvY = 0,
		lvZ = 0,
		last = (new Date()).getTime();

	var alpha, beta, gamma;

//	window.addEventListener('devicemotion', function(ev) {
//		var rotationRate = ev.rotationRate,
//			accel = ev.acceleration;
//
//		vrAlpha += rotationRate.alpha;
//		vrBeta += rotationRate.beta;
//		vrGamma += rotationRate.gamma;
//
//		aX = accel.x;
//		aY = accel.y;
//		aZ = accel.z;
//
////		aX = Math.abs(aX) < 0.5 ? 0 : aX;
////		aY = Math.abs(aY) < 0.7 ? 0 : aY;
////		aZ = Math.abs(aZ) < 0.5 ? 0 : aZ;
////
////		vX += aX;
////		vY += aY;
////		vZ += aZ;
////		socket.emit('move', {
////			vrAlpha: vrAlpha,
////			vrBeta: vrBeta,
////			vrGamma: vrGamma,
////			vX: vX,
////			vY: vY,
////			vZ: vZ
////		});
//
////		aX = accel.x;
////		aY = accel.y;
////		aZ = accel.z;
////		if (Math.abs(aY) > .6)
////		console.log(aY);
//	});

	window.addEventListener('deviceorientation', function(ev) {
		var oGamma = ev.gamma;

		alpha = ev.alpha + initMod;
		beta = ev.gamma;
		gamma = ev.beta;
//		beta = ev.beta;
//		gamma = ev.gamma;
	});

	window.addEventListener('touchmove', function(ev) {
		ev.preventDefault();
	});

	setInterval(function() {
//		var now = (new Date()).getTime(),
//			delta = (now - last) / 1000;
//
//		last = now;
//
//		vrAlpha = Math.abs(vrAlpha) > 2 ? vrAlpha : 0;
//		vrBeta = Math.abs(vrBeta) > 2 ? vrBeta : 0;
//		vrGamma = Math.abs(vrGamma) > 2 ? vrGamma : 0;
//
//		aX = Math.abs(aX) > 0.6 ? aX : 0;
//		aY = Math.abs(aY) > 0.6 ? aY : 0;
//		aZ = Math.abs(aZ) > 0.6 ? aZ : 0;
//
//		vX = 0 + (aX * Math.sqrt(delta));
//		vY = 0 + (aY * Math.sqrt(delta));
//		vZ = 0 + (aZ * Math.sqrt(delta));
////		console.log(aZ);//, delta, Math.sqrt(delta));
////		vX = Math.abs(vX) > 10 ? vX : 0;
////		vY = Math.abs(vY) > 10 ? vY : 0;
////		vZ = Math.abs(vZ) > 10 ? vZ : 0;
////console.log(vX);
////		if ( vrAlpha != lvrAlpha || vrBeta != lvrBeta || vrGamma != lvrGamma ||
//		if ( Math.abs(vX) != lvX || Math.abs(vY) != lvY || Math.abs(vZ) != lvZ ) {
////			console.log(vX);
//			socket.emit('move', {
//
//				vX: vX,
//				vY: vY,
//				vZ: vZ
//			});
//			lvrAlpha = vrAlpha;
//			lvrBeta = vrBeta;
//			lvrGamma = vrGamma;
//			lvX = vX;
//			lvY = vY;
//			lvZ = vZ;
//		}
//
//		vrAlpha = 0;
//		vrBeta = 0;
//		vrGamma = 0;
//		vX = 0;
//		vY = 0;
//		vZ = 0;
		socket.emit('move', {
			a: alpha,
			b: beta,
			g: gamma
		});
	}, 100);
};

window.addEventListener('DOMContentLoaded', function() {
	SK.initComm();
}, false);