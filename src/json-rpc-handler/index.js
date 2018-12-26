const fileHandler = require('./fileHandler');


function _isValidCommand(command) {

    return new Promise((resolve, reject) => {
        if (typeof command === 'string') {
            try {
                jsonCommand = JSON.parse(command);
            }
            catch (e) {
                reject("invalid command format");
            }
        } else {
            try {
                jsonCommand = JSON.parse(JSON.stringify(command));
            }
            catch (e) {
                reject("invalid command format");
            }
        }


        if (jsonCommand.hasOwnProperty('method')) {
            if (typeof jsonCommand["method"] !== "string") {
                reject('method should be string');
            }
            if (jsonCommand.hasOwnProperty('id')) {
                if (jsonCommand.hasOwnProperty('jsonrpc')) {
                    if (jsonCommand.hasOwnProperty('response')) {
                        resolve(jsonCommand);
                    } else {
                        reject('specify response in the command');
                    }
                } else {
                    reject('jsonrpc version is not defined in the command');
                }
            } else {
                reject('id is not defined in the command');
            }
        } else {
            reject("method not defined in the command");
        }
    });

}
function _addCommandToList(command, cs) {
    return new Promise((resolve, reject) => {
        _isValidCommand(command)
            .then(jsonCommand => {
                console.log(command);
                console.log(cs);

                if (cs[jsonCommand.method] === undefined) {
                    cs[jsonCommand.method] = {}

                }
                if (cs[jsonCommand.method]["requests"] === undefined) {
                    cs[jsonCommand.method]["requests"] = [];
                }
                
                if(cs[jsonCommand.method]["requests"].length === 0){
                    cs[jsonCommand.method]["requests"].push({
                        params:jsonCommand.params,
                        responses:[]
                    })
                }

                cs[jsonCommand.method]["requests"].forEach((request) => {
                    if(request.params !== undefined){
                        if(JSON.stringify(request.params) === JSON.stringify(jsonCommand.params)){
                            var responseObj = {
                                "jsonrpc":"2.0",
                                "id":jsonCommand.id
                            };
                            if(jsonCommand.response.hasOwnProperty("result")){
                                responseObj["result"]=jsonCommand.response.result
                            }

                            if(jsonCommand.response.hasOwnProperty("error")){
                                responseObj["error"]=jsonCommand.response.error
                            }

                            request['responses'].push(responseObj);
                        }
                    }
                });
                resolve(cs);
            })
            .catch(e => reject(e))

    });
}

function addCommand(command) {
    return new Promise((res, rej) => {

        fileHandler
            .readFromFile()
            .then(cs => _addCommandToList(command, cs))
            .then(c => fileHandler.writeToFile(c))
            .catch(e => rej(e));
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