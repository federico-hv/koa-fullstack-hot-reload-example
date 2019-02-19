import api from './api';
// import hotroute from './hotroute';

function applyRoutes(app) {
	app.use(api.routes()).use(api.allowedMethods());
	// app.use(hotroute.routes()).use(hotroute.allowedMethods());
}

export default applyRoutes;