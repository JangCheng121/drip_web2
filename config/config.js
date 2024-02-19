const appName = 'HLive';
const databaseName = 'drip';
const appServer = 'https://web.live-casino-club.com';
const apiServer = 'https://api.live-casino-club.com';
const rtmpServer = 'rtmp://live.live-casino-club.com';
const hlsServer = 'https://live.live-casino-club.com';
const staticServer = 'https://static.live-casino-club.com';
const appPort = 5000;
const apiPort = 443;
const rtmpPort = 1935;
const hlsPort = 443;

// const appServer = 'http://127.0.0.1';
 //const apiServer = 'http://12'//;
// const rtmpServer = 'rtmp://live.live-casino-club.com';
// const hlsServer = 'https://live.live-casino-club.com';
// const staticServer = 'https://static.live-casino-club.com';
// const appPort = 5000;
// const apiPort = 8082;
// const rtmpPort = 1935;
// const hlsPort = 443;

const config = {
    appName,
    appPort,
    appUrl: `${appServer}:${appPort}`,
    apiUrl: `${apiServer}:${apiPort}`,
    staticServerUrl: staticServer,
    databaseUrl: `mongodb://localhost/${databaseName}`,
    rtmpUrl: `${rtmpServer}:${rtmpPort}/live`,
    hlsUrl: `${hlsServer}:${hlsPort}`,
    jsonOptions: {
        headers: {
            'Content-Type': 'application/json'
        }
    },
    secret: 'SeCrEtKeYfOrHaShInGDriP',
};

module.exports = {
    config: config
};