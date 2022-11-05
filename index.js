const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environtments");
const data = require("./lib/data");

const app = {};

// data.create(
//   "test",
//   "newFile",
//   { name: "Bangladesh", language: "Bangla" },
//   (err) => {
//     console.log(`error was`, err);
//   }
// );

// data.read("mafia", "newMafia", (err, result) => {
//   console.log(err, result);
// });

data.read("king", "newKing", { country: "England" }, (err) => {
  console.log(err);
});

app.createServer = () => {
  const server = http.createServer(app.handlerServer);
  server.listen(environment.port, () => {
    console.log(`The server is running port: ${environment.port}`);
  });
};

app.handlerServer = handleReqRes;

app.createServer();
