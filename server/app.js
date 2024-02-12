// load dependence
require('dotenv').config();
const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const compression = require('compression');

const certsPath = path.join(__dirname, 'certs');

const options = {
    key: fs.readFileSync(path.join(certsPath, 'hlive.key')),
    cert: fs.readFileSync(path.join(certsPath, 'hlive.crt'))
};
let https = false;
const server = require('http').createServer(app);
// https = true;
// const server = require('https').createServer(options, app);

const dev = process.env.NODE_ENV !== 'production';

const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('../i18n');

const nextApp = next({dev});
const {config} = require('../config/config');
const pageRoutes = require('./pageRoutes');
const pageHandler = pageRoutes.getRequestHandler(nextApp);

nextApp.prepare().then(() => {

    app.use(nextI18NextMiddleware(nextI18next));
    app.use(cors());
    app.use(compression());

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'db connection error:'));
    db.once('open', () => console.log("Connected to mongoose db", config.databaseUrl));
    // mongoose.connect(config.databaseUrl, {useNewUrlParser: true});

    // Next.js page routes
    app.get('*', pageHandler);

    // Start server
    server.listen(config.appPort,
        () => console.log(`${https ? config.appName + "s" : config.appName} running on ${config.appUrl}/`))
})
