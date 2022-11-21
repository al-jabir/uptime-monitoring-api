const { mafiaHandler } = require("../handlers/routeHandle/sampleHandler");
const { userHandler } = require("../handlers/routeHandle/userHandler");
const routes = {
  mafia: mafiaHandler,
  production: mafiaHandler,
  user: userHandler,
};

module.exports = routes;
