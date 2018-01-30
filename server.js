import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import path from 'path';

import App from './shared/App';

import encountersRouter from './routes/encounters.mjs';
import minorMagicRouter from './routes/minorMagicRouter.mjs';

import trinkets from './trinkets.mjs';

import shuffle from './shuffle.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

const renderPage = (title, app) => `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
      </head>

      <body>
        <header>
          <h1>${title}</h1>
        </header>
        
        <div id="app">${renderToString(app)}</div>
        
      </body>
      <script src="/static/client.js"></script>
    </html>
  </html>
`;

app.use('/encounters', encountersRouter);
app.use("/static/client.js", express.static(path.join(process.cwd(), "dist/client.js")));

app.get('/*', (req, res) => {
    let pageTitle = 'Thunder Rolling to Higher Mountainsides';

    res.status(200).send(renderPage(pageTitle, (
        <StaticRouter context={{}} location={req.url}>
            <App host={req.headers.host} />
        </StaticRouter>
    )));
});

app.listen(PORT, () => {
    console.log("Server listening on", PORT);
});
