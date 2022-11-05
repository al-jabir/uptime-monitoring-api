const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environtments");

const app = {};

app.createServer = () => {
  const server = http.createServer(app.handlerServer);
  server.listen(environment.port, () => {
    console.log(`The server is running port: ${environment.port}`);
  });
};

app.handlerServer = handleReqRes;

app.createServer();
