const http = require('http');

const app = {};

// configuration

app.config = {
    port: 1998,
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Lisetening t port ${app.config.port}`);
    });
};

app.handleReqRes = (req, res) => {
    res.end('Hello World');
};
app.createServer()