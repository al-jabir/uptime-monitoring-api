const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

const app = {};

app.createServer = () => {
  const server = http.createServer(app.handlerServer);
  server.listen(app.config.port, () => {
    console.log(`The server is running port: ${app.config.port}`);
  });
};

app.handlerServer = handleReqRes;

app.createServer();
