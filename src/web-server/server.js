const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, 'public')));
app.post("/add", (req, res) => {
    res.send({ result: true });
    res.end();
})
app.get("/rpc", (req, res) => {

})


function startServer(port) {
    server.listen(port, () => {
        console.log('server has started');
    });
}
module.exports = {
    startServer: startServer
}