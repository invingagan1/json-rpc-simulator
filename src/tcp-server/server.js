const net = require('net');
const server = net.createServer();
server.on('connection', socket => {
    console.log(`Connected to ${socket.remoteAddress} at port ${socket.remotePort}`)

    socket.on('data', data => {
        console.log(data.toString());
    });

    socket.on('close', () => console.log('remote connection closed'));
    socket.on('error', () => console.error('error happened'));
    socket.on('timeout', () => console.log('connection timed out for connection'));

});

function startServer(port){
    server.listen(port , () => {
        console.log(`TCP server is running at port ${port}`)
    })
}

module.exports = {
    startServer: startServer
}