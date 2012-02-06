// This code is provided "as is" under the DBTB (Don't Break The Balls) license
// This was coded in a shed above an indian graveyard, if you steal it you will die
// optimization needed, namespacing needed, better doc needed, sound needed
// would be cool to add a bat or sword or a machine gun... or just make it look like Chuck Norris
var monguito = {};

// global functions, sooooorry
function createHead() {
	var bHead = new THREE.Mesh(
		new THREE.SphereGeometry(20, 36),
		new THREE.MeshLambertMaterial({color: 0xff0000})
	);
	bHead.castShadow = true;
	monguito.head = {
		b: bHead
	};
	scene.add(bHead);
	bHead.position.set(0, 237, 0);
};

function createBody() {
	var bBody = new THREE.Mesh(
		new THREE.CubeGeometry(50, 80, 30),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bBody.castShadow = true;
	monguito.trunk = {
		b: bBody
	};
	scene.add(bBody);
	bBody.position.set(0, 175, 0);
};

function createArms() {
	var bRightJoint =  new THREE.Mesh(
		new THREE.SphereGeometry(6, 16),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bRightJoint.castShadow = true;
	monguito.rightJoint = {
		b: bRightJoint
	};
	scene.add(bRightJoint);
	bRightJoint.position.set(-35, 208, 0);

	var bRightArm1 = new THREE.Mesh(
		new THREE.CubeGeometry(12, 34, 12),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bRightArm1.castShadow = true;
	monguito.rightArm1 = {
		b: bRightArm1
	};
	scene.add(bRightArm1);
	bRightArm1.position.set(-36, 185, 0);

	var bRightElbow =  new THREE.Mesh(
		new THREE.SphereGeometry(5, 16),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bRightElbow.castShadow = true;
	monguito.rightElbow = {
		b: bRightElbow
	};
	scene.add(bRightElbow);
	bRightElbow.position.set(-34.5, 165, 0);

	var bRightArm2 = new THREE.Mesh(
		new THREE.CubeGeometry(12, 34, 12),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bRightArm2.castShadow = true;
	monguito.rightArm2 = {
		b: bRightArm2
	};
	scene.add(bRightArm2);
	bRightArm2.position.set(-36, 145, 0);

	// LEFT
	var bLeftJoint =  new THREE.Mesh(
		new THREE.SphereGeometry(6, 16),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bLeftJoint.castShadow = true;
	monguito.leftJoint = {
		b: bLeftJoint
	};
	scene.add(bLeftJoint);
	bLeftJoint.position.set(35, 208, 0);

	var bLeftArm1 = new THREE.Mesh(
		new THREE.CubeGeometry(12, 34, 12),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bLeftArm1.castShadow = true;
	monguito.leftArm1 = {
		b: bLeftArm1
	};
	scene.add(bLeftArm1);
	bLeftArm1.position.set(36, 185, 0);

	var bLeftElbow =  new THREE.Mesh(
		new THREE.SphereGeometry(5, 16),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bLeftElbow.castShadow = true;
	monguito.leftElbow = {
		b: bLeftElbow
	};
	scene.add(bLeftElbow);
	bLeftElbow.position.set(34.5, 165, 0);

	var bLeftArm2 = new THREE.Mesh(
		new THREE.CubeGeometry(12, 34, 12),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bLeftArm2.castShadow = true;
	monguito.leftArm2 = {
		b: bLeftArm2
	};
	scene.add(bLeftArm2);
	bLeftArm2.position.set(36, 145, 0);
};

function createLegs() {
	var bRightLeg1 = new THREE.Mesh(
		new THREE.CubeGeometry(20, 40, 20),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bRightLeg1.castShadow = true;
	monguito.rightLeg1 = {
		b: bRightLeg1
	};
	scene.add(bRightLeg1);
	bRightLeg1.position.set(-12, 110, 0);

	var bRightKnee =  new THREE.Mesh(
		new THREE.SphereGeometry(8, 16),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bRightKnee.castShadow = true;
	monguito.rightKnee = {
		b: bRightKnee
	};
	scene.add(bRightKnee);
	bRightKnee.position.set(-12, 82, 0);

	var bRightLeg2 = new THREE.Mesh(
		new THREE.CubeGeometry(20, 40, 20),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bRightLeg2.castShadow = true;
	monguito.rightLeg2 = {
		b: bRightLeg2
	};
	scene.add(bRightLeg2);
	bRightLeg2.position.set(-12, 54, 0);

	// LEFT
	var bLeftLeg1 = new THREE.Mesh(
		new THREE.CubeGeometry(20, 40, 20),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bLeftLeg1.castShadow = true;
	monguito.leftLeg1 = {
		b: bLeftLeg1
	};
	scene.add(bLeftLeg1);
	bLeftLeg1.position.set(12, 110, 0);

	var bLeftKnee =  new THREE.Mesh(
		new THREE.SphereGeometry(8, 16),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bLeftKnee.castShadow = true;
	monguito.leftKnee = {
		b: bLeftKnee
	};
	scene.add(bLeftKnee);
	bLeftKnee.position.set(12, 82, 0);

	var bLeftLeg2 = new THREE.Mesh(
		new THREE.CubeGeometry(20, 40, 20),
		new THREE.MeshPhongMaterial({color: 0x00ff00})
	);
	bLeftLeg2.castShadow = true;
	monguito.leftLeg2 = {
		b: bLeftLeg2
	};
	scene.add(bLeftLeg2);
	bLeftLeg2.position.set(12, 54, 0);
};

function createConstraints(control) {
	var minDist = 250;

	var cons = [
	    // attach head to body
	    new jigLib.JConstraintMaxDistance(monguito.head.p, [0, -20, 0, 0], monguito.trunk.p, [0, 40, 0, 0], 1),

	    // right arm
		new jigLib.JConstraintMaxDistance(monguito.trunk.p, [-25,34,0,0], monguito.rightJoint.p, [6,0,0,0], 1),
		new jigLib.JConstraintMaxDistance(monguito.rightJoint.p, [0,0,0,0], monguito.rightArm1.p, [0,17,0,0], 6),
		new jigLib.JConstraintMaxDistance(monguito.rightArm1.p, [0,-17,0,0], monguito.rightElbow.p, [0,0,0,0], 5),
		new jigLib.JConstraintMaxDistance(monguito.rightElbow.p, [0,0,0,0], monguito.rightArm2.p, [0,17,0,0], 5),

		// left arm
		new jigLib.JConstraintMaxDistance(monguito.trunk.p, [25,34,0,0], monguito.leftJoint.p, [-6,0,0,0], 1),
		new jigLib.JConstraintMaxDistance(monguito.leftJoint.p, [0,0,0,0], monguito.leftArm1.p, [0,17,0,0], 6),
		new jigLib.JConstraintMaxDistance(monguito.leftArm1.p, [0,-17,0,0], monguito.leftElbow.p, [0,0,0,0], 5),
		new jigLib.JConstraintMaxDistance(monguito.leftElbow.p, [0,0,0,0], monguito.leftArm2.p, [0,17,0,0], 5),

		// right leg
		new jigLib.JConstraintMaxDistance(monguito.trunk.p, [-12,-40,0,0], monguito.rightLeg1.p, [0,20,0,0], 6),
		new jigLib.JConstraintMaxDistance(monguito.rightLeg1.p, [0,-20,0,0], monguito.rightKnee.p, [0,0,0,0], 8),
		new jigLib.JConstraintMaxDistance(monguito.rightKnee.p, [0,0,0,0], monguito.rightLeg2.p, [0,20,0,0], 8),

		// left leg
		new jigLib.JConstraintMaxDistance(monguito.trunk.p, [12,-40,0,0], monguito.leftLeg1.p, [0,20,0,0], 6),
		new jigLib.JConstraintMaxDistance(monguito.leftLeg1.p, [0,-20,0,0], monguito.leftKnee.p, [0,0,0,0], 8),
		new jigLib.JConstraintMaxDistance(monguito.leftKnee.p, [0,0,0,0], monguito.leftLeg2.p, [0,20,0,0], 8),

		// control pad to head
		new jigLib.JConstraintMaxDistance(control, [0, 0, -40, 0], monguito.head.p, [0, 20, 0, 0], minDist),
		// control pad to ass
		new jigLib.JConstraintMaxDistance(control, [0, 0, -110, 0], monguito.trunk.p, [0, -40, -15, 0], minDist + 130),
		// control pad to arms
		new jigLib.JConstraintMaxDistance(control, [-190, 0, 50, 0], monguito.rightArm2.p, [0,-7,0,0], minDist + 55),
		new jigLib.JConstraintMaxDistance(control, [190, 0, 50, 0], monguito.leftArm2.p, [0,-7,0,0], minDist + 55),

		// control to legs
		new jigLib.JConstraintMaxDistance(control, [-60, 0, 150, 0], monguito.rightKnee.p, [0,-10,0,0], minDist + 190),
		new jigLib.JConstraintMaxDistance(control, [60, 0, 150, 0], monguito.leftKnee.p, [0,-10,0,0], minDist + 190)
	];
	for (var i=0, len=cons.length; i<len; i++) {
		system.addConstraint(cons[i]);
	}
};

function createMonguito() {
	createHead();
	createBody();
	createArms();
	createLegs();
};

function initMonguitoPhysics(control) {
    var phHead = new jigLib.JSphere(null, 20);
    phHead.set_mass(2000);
    phHead.moveTo([0, 217, 0, 0]);
    phHead.set_friction(1);
    phHead.set_restitution(0);
    phHead.set_rotVelocityDamping([0, 0, 0, 0]);

    monguito.head.b.matrixAutoUpdate = false;
    monguito.head.p = phHead;
    system.addBody(phHead);

    var phBody = new jigLib.JBox(null, 50, 30, 80);
    phBody.set_mass(2000);
    phBody.moveTo([0, 175, 0, 0]);
    phBody.set_friction(1);
    phBody.set_restitution(0);
    phBody.setInactive();
    phBody.set_rotVelocityDamping([0.2, 0.4, 0.4, 0]);

    monguito.trunk.b.matrixAutoUpdate = false;
    monguito.trunk.p = phBody;
    system.addBody(phBody);

    var phRightJoint = new jigLib.JSphere(null, 6);
    phRightJoint.set_mass(2000);
    phRightJoint.moveTo([-31, 208, 0, 0]);
    phRightJoint.set_friction(0);
    phRightJoint.set_restitution(0);
    phRightJoint.set_rotVelocityDamping([0, 0, 0, 0]);

    monguito.rightJoint.b.matrixAutoUpdate = false;
    monguito.rightJoint.p = phRightJoint;
    system.addBody(phRightJoint);

    var phRightArm1 = new jigLib.JBox(null, 12, 12, 34);
    phRightArm1.set_mass(2000);
    phRightArm1.moveTo([-32, 185, 0, 0]);
    phRightArm1.set_friction(0);
    phRightArm1.set_restitution(0);
    phRightArm1.set_rotVelocityDamping([0.4, 0.4, 0.4, 0]);

    monguito.rightArm1.b.matrixAutoUpdate = false;
    monguito.rightArm1.p = phRightArm1;
    system.addBody(phRightArm1);

    var phRightElbow = new jigLib.JSphere(null, 5);
    phRightElbow.set_mass(2000);
    phRightElbow.moveTo([-30.5, 165, 0, 0]);
    phRightElbow.set_friction(0);
    phRightElbow.set_restitution(0);
    phRightElbow.set_rotVelocityDamping([0, 0, 0, 0]);

    monguito.rightElbow.b.matrixAutoUpdate = false;
    monguito.rightElbow.p = phRightElbow;
    system.addBody(phRightElbow);

    var phRightArm2 = new jigLib.JBox(null, 12, 12, 34);
    phRightArm2.set_mass(2000);
    phRightArm2.moveTo([-32, 145, 0, 0]);
    phRightArm2.set_friction(0);
    phRightArm2.set_restitution(0);
    phRightArm2.set_rotVelocityDamping([0.4, 0.4, 0.4, 0]);

    monguito.rightArm2.b.matrixAutoUpdate = false;
    monguito.rightArm2.p = phRightArm2;
    system.addBody(phRightArm2);


    // LEFT
    var phLeftJoint = new jigLib.JSphere(null, 6);
    phLeftJoint.set_mass(2000);
    phLeftJoint.moveTo([31, 208, 0, 0]);
    phLeftJoint.set_friction(1);
    phLeftJoint.set_restitution(0);
    phLeftJoint.set_rotVelocityDamping([0, 0, 0, 0]);

    monguito.leftJoint.b.matrixAutoUpdate = false;
    monguito.leftJoint.p = phLeftJoint;
    system.addBody(phLeftJoint);

    var phLeftArm1 = new jigLib.JBox(null, 12, 12, 34);
    phLeftArm1.set_mass(2000);
    phLeftArm1.moveTo([32, 185, 0, 0]);
    phLeftArm1.set_friction(1);
    phLeftArm1.set_restitution(0);
    phLeftArm1.set_rotVelocityDamping([0.4, 0.4, 0.4, 0]);

    monguito.leftArm1.b.matrixAutoUpdate = false;
    monguito.leftArm1.p = phLeftArm1;
    system.addBody(phLeftArm1);

    var phLeftElbow = new jigLib.JSphere(null, 5);
    phLeftElbow.set_mass(2000);
    phLeftElbow.moveTo([30.5, 165, 0, 0]);
    phLeftElbow.set_friction(1);
    phLeftElbow.set_restitution(0);
    phLeftElbow.set_rotVelocityDamping([0, 0, 0, 0]);

    monguito.leftElbow.b.matrixAutoUpdate = false;
    monguito.leftElbow.p = phLeftElbow;
    system.addBody(phLeftElbow);

    var phLeftArm2 = new jigLib.JBox(null, 12, 12, 34);
    phLeftArm2.set_mass(2000);
    phLeftArm2.moveTo([32, 145, 0, 0]);
    phLeftArm2.set_friction(1);
    phLeftArm2.set_restitution(0);
    phLeftArm2.set_rotVelocityDamping([0.4, 0.4, 0.4, 0]);

    monguito.leftArm2.b.matrixAutoUpdate = false;
    monguito.leftArm2.p = phLeftArm2;
    system.addBody(phLeftArm2);

    /////
    var phRightLeg1 = new jigLib.JBox(null, 20, 20, 40);
    phRightLeg1.set_mass(2000);
    phRightLeg1.moveTo([-12, 110, 0, 0]);
    phRightLeg1.set_friction(0);
    phRightLeg1.set_restitution(0);
    phRightLeg1.set_rotVelocityDamping([0.5, 0.1, 0.2, 0]);

    monguito.rightLeg1.b.matrixAutoUpdate = false;
    monguito.rightLeg1.p = phRightLeg1;
    system.addBody(phRightLeg1);

    var phRightKnee = new jigLib.JSphere(null, 8);
    phRightKnee.set_mass(2000);
    phRightKnee.moveTo([-12, 82, 0, 0]);
    phRightKnee.set_friction(0);
    phRightKnee.set_restitution(0);
    phRightKnee.set_rotVelocityDamping([0, 0, 0, 0]);

    monguito.rightKnee.b.matrixAutoUpdate = false;
    monguito.rightKnee.p = phRightKnee;
    system.addBody(phRightKnee);

    var phRightLeg2 = new jigLib.JBox(null, 20, 20, 40);
    phRightLeg2.set_mass(2000);
    phRightLeg2.moveTo([-12, 54, 0, 0]);
    phRightLeg2.set_friction(0);
    phRightLeg2.set_restitution(0);
    phRightLeg2.set_rotVelocityDamping([0.5, 0.1, 0.2, 0]);

    monguito.rightLeg2.b.matrixAutoUpdate = false;
    monguito.rightLeg2.p = phRightLeg2;
    system.addBody(phRightLeg2);

    // LEFT
    var phLeftLeg1 = new jigLib.JBox(null, 20, 20, 40);
    phLeftLeg1.set_mass(2000);
    phLeftLeg1.moveTo([12, 110, 0, 0]);
    phLeftLeg1.set_friction(0);
    phLeftLeg1.set_restitution(0);
    phLeftLeg1.set_rotVelocityDamping([0.5, 0.1, 0.2, 0]);

    monguito.leftLeg1.b.matrixAutoUpdate = false;
    monguito.leftLeg1.p = phLeftLeg1;
    system.addBody(phLeftLeg1);

    var phLeftKnee = new jigLib.JSphere(null, 8);
    phLeftKnee.set_mass(2000);
    phLeftKnee.moveTo([12, 82, 0, 0]);
    phLeftKnee.set_friction(0);
    phLeftKnee.set_restitution(0);
    phLeftKnee.set_rotVelocityDamping([0, 0, 0, 0]);

    monguito.leftKnee.b.matrixAutoUpdate = false;
    monguito.leftKnee.p = phLeftKnee;
    system.addBody(phLeftKnee);

    var phLeftLeg2 = new jigLib.JBox(null, 20, 20, 40);
    phLeftLeg2.set_mass(2000);
    phLeftLeg2.moveTo([12, 54, 0, 0]);
    phLeftLeg2.set_friction(0);
    phLeftLeg2.set_restitution(0);
    phLeftLeg2.set_rotVelocityDamping([0.5, 0.1, 0.2, 0]);

    monguito.leftLeg2.b.matrixAutoUpdate = false;
    monguito.leftLeg2.p = phLeftLeg2;
    system.addBody(phLeftLeg2);


    createConstraints(control);
};