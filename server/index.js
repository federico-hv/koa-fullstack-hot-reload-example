import http from 'http';
import app from './server';

const port = 3000;

let currentApp = app.callback();
const server = http.createServer(currentApp);

server.listen(port);

if (module.hot) {
    module.hot.accept('./server', () => {
        server.removeListener('request', currentApp);
        currentApp = app.callback();
        server.on('request', currentApp);
    });
}

console.log(`Server running on: http://localhost: ${port}`);