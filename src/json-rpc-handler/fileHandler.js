const fs = require('fs');


function readFromFile() {
    return new Promise((res, rej) => {
        fs.readFile('./commandFile.json', {
            encoding: 'utf8',
            flag: 'r'
        }, (e, d) => {
            if (e) {
                rej(new Error('Error in reading file'));
            } else {
                res(d);
            }
        });
    });

}

async function writeToFile() {
    return
}

module.exports = {
    readFromFile,
    writeToFile
}