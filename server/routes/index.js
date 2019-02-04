import api from './api';
import test from './test';

function applyRoutes(app) {
	app.use(api.routes()).use(api.allowedMethods());
	app.use(test.routes()).use(test.allowedMethods());
}

export default applyRoutes;