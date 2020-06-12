import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import App from '../common/App'
import Koa from 'koa';
import applyRoutes from './routes';

const app = new Koa();

applyRoutes(app);

app.use(ctx => {
    const sheet = new ServerStyleSheet()
    const application = renderToString(sheet.collectStyles(<App />))
    const styleTags = sheet.getStyleTags()

    ctx.body = `<!doctype html>
    <html class="no-js" lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>HMR all the things!</title>
            <meta name="description" content="">
            <meta name="viewport" 
            content="width=device-width,  initial-scale=1">
            ${styleTags}
        </head>
        <body>
            <div id="root">${application}</div>
            <link rel="stylesheet" href="http://localhost:3001/styles.css">
            <script src="http://localhost:3001/client.js"></script>
        </body>
    </html>`;
    sheet.seal();
});

export default app