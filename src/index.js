/**
 * @author Gagan Deep Singh
 * @description it will help to create json-rpc request and response. User can create these responses and use them
 * in different applications.
 */
const commander = require('commander');
const version = require('./utils/constants').version;
const config = require('./config/config');
const webServer = require('./web-server/server');
const tcpServer = require('./tcp-server/server');

commander.version(version);
commander.parse(process.argv);

if(config.webServer.enable){
    // start webserver
    webServer.startServer(config.webServer.port);
}
if(config.tcpServer.enable){
    //start tcp server
    tcpServer.startServer(config.tcpServer.port)
}