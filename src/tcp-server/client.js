const net = require('net');
const socket = new net.Socket();

socket.on('data', data => {
    console.log(data.toString());
});
socket.connect(8080, '127.0.0.1', () => {
    console.log(`connected to server`);
    sendCommands(JSON.stringify({
        jsonrpc:2,
        method:''     
    }));
});

function sendCommands(command){
    socket.emit(command);
}