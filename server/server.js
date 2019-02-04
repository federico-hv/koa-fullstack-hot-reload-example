import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../common/App'
import Koa from 'koa';
import applyRoutes from './routes';

const app = new Koa();

applyRoutes(app);

app.use(ctx => {
    let application = renderToString(<App />)

    ctx.body = `<!doctype html>
    <html class="no-js" lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>HMR all the things!</title>
            <meta name="description" content="">
            <meta name="viewport" 
            content="width=device-width,  initial-scale=1">
        </head>
        <body>
            <div id="root">${application}</div>
            <script src="http://localhost:3001/client.js"></script>
        </body>
    </html>`;
});

export default app