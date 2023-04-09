const config = require('./config.js');
const ConsoleConnector = require('console-connector');

class Harvester {
    constructor() {
        this.consoleConnector = new ConsoleConnector({
            CONSOLE_SERVICE_CONFIG: {
                host: config.CONSOLE_SERVICE_CONFIG.host,
                port: config.CONSOLE_SERVICE_CONFIG.port,
            },
            USER_AGENT: "Client::Harvester",
            HAS_SERVER: false
        });
    }

    init() {
        this.consoleConnector.init();

        this.consoleConnector.get('/guilds', { source: "Bot::Bridge" }).then(response => {
            console.log('Bridge Guilds:')
            console.log(response)
        });
    }
}

new Harvester().init();