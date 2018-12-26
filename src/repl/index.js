const repl = require('repl');
const jsonRpcHandler = require('../json-rpc-handler/index');
const server = repl.start({
    prompt: '> '
});

server.defineCommand('add', {
    help: "add JSON rpc request response pair",
    action(command) {
        jsonRpcHandler
            .addCommand(command)
            .then(() => {
                console.log("command added");
                this.displayPrompt()
            })
            .catch((e) => {
                console.log(e.toString());
                this.displayPrompt()
            });
    }
});
server.defineCommand('remove', {
    help: "remove command from list",
    action(command) {
        jsonRpcHandler
            .removeCommand(command)
            .then(() => {
                console.log('command removed');
                this.displayPrompt()
            })
            .catch(e => {
                console.log(e.toString());
                this.displayPrompt()
            });
    }
})