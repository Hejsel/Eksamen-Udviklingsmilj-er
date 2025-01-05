const stiFunktionerCJS = require('./common-js-modules/pathConstructor.cjs');
const mimeTyperCJS = require('./common-js-modules/mimeTypes.cjs');

const filHaandteringCJS = {
	pathConstructorCJS: stiFunktionerCJS.pathConstructor,
	mimeTyperCJS: mimeTyperCJS,
};

module.exports = {
	filHaandteringCJS,
};
