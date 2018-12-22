const fileHandler = require('./fileHandler');

function addCommand(command) {
    return new Promise((res, rej) => {

        let jsonCommand = null;

        if (typeof command === 'string') {
            try {
                jsonCommand = JSON.parse(command);
            }
            catch (e) {
                rej(new Error('Invalid command'));
            }
        } else {
            try {
                jsonCommand = JSON.parse(JSON.stringify(command));
            }
            catch (e) {
                rej(new Error('Invalid command'));
            }
        }
        fileHandler.readFromFile().then(d => {
            res({ result: true });
        });
    });
}
function removeCommand(command) {
    return new Promise((res, rej) => {
        res({
            result: true
        });
    });
}
module.exports = {
    addCommand,
    removeCommand
};