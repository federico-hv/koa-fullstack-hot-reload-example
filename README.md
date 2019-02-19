# Hot reload for client and server with Koajs

This repo is a basic example of hot reloading on both the server and the client using  
[Koa](https://koajs.com/), [React](https://reactjs.org/) and [Webpack](https://webpack.js.org/) based on the article [Hot reload all the things!](https://hackernoon.com/hot-reload-all-the-things-ec0fed8ab0) and the [Koa example](https://github.com/mhaagens/koa-hot-reload)


To start the server run `npm install` and `npm start`.


### Hot reload server

1. Open `localhost:3000`. A box with a button to fetch message from server will be rendered.
2. Click the button and see the app requests the message and renders it.
3. Comment line `9` and uncomment line `10` on `./server/routes/api.js`. The server hot reloads.
4. Click the button and see the app fetches and renders the new message `THIS IS A HOT RELOADED MESSAGE`.
5. Modify anything on component `App` on file `./common/App.js`. See the client gets hot reloaded too.


### Hot reload routes

This was not possible in other hot reloading solutions but it is with this one. After having started
the server just follow this steps:

1. Make a request to `localhost:3000/hotroute`. See it just renders the App since the route does not exist yet and the server responds with the app by default.
2. Uncomment lines `2` and `6` on `./server/routes/index.js`.
3. Make a request again to `localhost:3000/hotroute`. See that instead of rendering the App the server now responds with a json with the message `THIS IS A HOT RELOADED ROUTE`.