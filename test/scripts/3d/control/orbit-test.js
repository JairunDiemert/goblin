/**
 * @file orbit control tests
 *
 * @author noodep
 * @version 0.58
 */

import Vec3 from '/src/math/vec3.js';

import OrbitControl from '/src/3d/control/orbit.js';

export default class OrbitControlTest {

	static runAll() {
		console.log('%c----- Testing /src/3d/control/orbit.js -----','color:lightblue;');
		console.time('Perf');

		OrbitControlTest.testDefaultConstruction();
		OrbitControlTest.offsetSettingCopiesValuesAndDoesNotKeepAReferenceToSuppliedVec3();

		console.timeEnd('Perf');
		console.log('%c----------------------------------------','color:lightblue;');
		console.log('\n');
	}

	static testDefaultConstruction() {
		const target = {
			setPose: () => {}
		};
		const orbit_control = new OrbitControl(target);
		console.assert(orbit_control != undefined, 'Default construction does not work.');
	}

	static offsetSettingCopiesValuesAndDoesNotKeepAReferenceToSuppliedVec3() {
		const target = {
			setPose: () => {}
		};
		const orbit_control = new OrbitControl(target);
		const offset = new Vec3(1.0, 2.0, 3.0);
		orbit_control.offset = offset;
		console.assert(orbit_control.offset != offset, 'Setting offset should not keep a reference to the supplied vec3 but copy values instead');
	}

}

