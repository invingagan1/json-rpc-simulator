const fs = require('fs');
const path = require('path');

function readFromFile() {
    return new Promise((res, rej) => {
        fs.readFile(path.join(__dirname, 'commandFile.json'), 'utf8', (e, d) => {
            if (e) {
                rej(new Error('Error in reading file'));
            } else {
                res(JSON.parse(d));
            }
        });
    });

}

function writeToFile(command) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname,'commandFile.json'),JSON.stringify(command),(e)=>{
            if(e){
                reject('Could not write to file')
            }else{
                resolve('successfully wrote to file')
            }
        })
        
    });
}

module.exports = {
    readFromFile,
    writeToFile
}